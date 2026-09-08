# Base44 Dev Environment

## What this app is
A Vite + React frontend (Base44 app) that connects to a Base44-hosted backend via `@base44/sdk` and `@base44/vite-plugin`. No local backend — all data comes from the Base44 cloud.

## How to run
```bash
docker compose -f docker-compose.base44.yml up -d
```
App is served on port 3000 (mapped to Vite's 5173 inside the container).

## Key env vars
- `VITE_BASE44_APP_ID` — Base44 app ID (defaults to `6a21b8605426a2a9bf55a069` in code)
- `VITE_BASE44_APP_BASE_URL` — Base44 backend URL (defaults to `https://6a21b8605426a2a9bf55a069.base44.app` in code)

Both have hardcoded fallbacks in `src/api/base44Client.js`, so the app boots without them. Override via the Base44 dashboard (secrets) if the app ID differs.

## Architecture notes
- The `@base44/vite-plugin` proxies `/api/*` requests to the Base44 backend automatically.
- `src/lib/AuthContext.jsx` checks app public settings and auth state on mount — the app shows a loading spinner until the backend responds.
- Pages are in `src/pages/` — German-language site (Förderbereiche, Mitgliedsantrag, Satzung, Vorstand, etc.).

## Verification
- `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000` → 200
- Vite dev server logs show `[base44] Proxy enabled: /api -> https://...base44.app`
- Served HTML includes `/@vite/client` and `/src/main.jsx` (live source, not prebuilt)

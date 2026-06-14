import { createClient } from '@base44/sdk';
import { appParams } from '@/lib/app-params';

const { appId, token, functionsVersion } = appParams;
const appBaseUrl = typeof window !== 'undefined' && window.location.hostname !== 'localhost'
  ? 'https://6a21b8605426a2a9bf55a069.base44.app'
  : (import.meta.env.VITE_BASE44_APP_BASE_URL || 'https://6a21b8605426a2a9bf55a069.base44.app');

//Create a client with authentication required
export const base44 = createClient({
  appId,
  token,
  functionsVersion,
  requiresAuth: false,
  appBaseUrl,
});
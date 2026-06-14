import { createClient } from '@base44/sdk';
import { appParams } from '@/lib/app-params';

const { appId, token, functionsVersion } = appParams;
const appBaseUrl = import.meta.env.VITE_BASE44_APP_BASE_URL || appParams.appBaseUrl;

//Create a client with authentication required
export const base44 = createClient({
  appId,
  token,
  functionsVersion,
  requiresAuth: false,
  appBaseUrl
});
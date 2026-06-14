import { createClient } from '@base44/sdk';
import { appParams } from '@/lib/app-params';

const { appId, token, functionsVersion } = appParams;

//Create a client with authentication required
export const base44 = createClient({
  appId: appId || '6a21b8605426a2a9bf55a069',
  token,
  functionsVersion,
  requiresAuth: false,
  appBaseUrl: 'https://6a21b8605426a2a9bf55a069.base44.app',
});
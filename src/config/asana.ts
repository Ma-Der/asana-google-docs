import Asana from 'asana';
import { asanaClientId, asanaClientSecret, asanaRedirectUri } from './envVar';

export const createClient = () => {
  const client = Asana.Client.create({
    clientId: asanaClientId,
    clientSecret: asanaClientSecret,
    redirectUri: asanaRedirectUri,
  });

  return client;
};

export const clientUseAuth = (client: Asana.Client, token: string): void => {
  if (!token) throw Error('Cannot authorize.');

  client.useOauth({ credentials: token });
};

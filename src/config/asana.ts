import Asana from 'asana';
import { asanaClientId, asanaClientSecret, asanaRedirectUri } from './envVar';

const createClient = () => {
  const client = Asana.Client.create({
    clientId: asanaClientId,
    clientSecret: asanaClientSecret,
    redirectUri: asanaRedirectUri,
  });

  return client;
};

export default createClient;

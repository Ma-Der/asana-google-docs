import { google } from 'googleapis';
import { googleScopes, googleKeyFile } from './envVar';
import { readFileSync } from 'fs';
import path from 'path';

type Credentials = {
  client_email: string;
  private_key: string;
};

export const readCredentials = (fileName: string): Credentials => {
  const file = readFileSync(path.resolve(fileName), 'utf8');
  const parsedFile = JSON.parse(file);
  const credentials = {
    client_email: parsedFile.client_email,
    private_key: parsedFile.private_key,
  };
  return credentials;
};

export const createGoogleAuth = () => {
  const credentials = readCredentials(googleKeyFile);
  const auth = new google.auth.JWT(
    credentials.client_email,
    null,
    credentials.private_key,
    [googleScopes],
  );
  return auth;
};
export const createGoogleSheetsInstance = async () => {
  const auth = createGoogleAuth();

  await auth.authorize();
  google.options({ auth });

  const googleSheets = google.sheets({ version: 'v4' });

  return googleSheets;
};

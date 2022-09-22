import dotenv from 'dotenv';
dotenv.config();

export const port = process.env.PORT as string;
export const asanaClientId = process.env.ASANA_CLIENT_ID as string;
export const asanaClientSecret = process.env.ASANA_CLIENT_SECRET as string;
export const asanaRedirectUri = process.env.ASANA_REDIRECT_URI as string;
export const googleScopes = process.env.GOOGLE_SCOPES as string;
export const googleKeyFile = process.env.GOOGLE_KEY_FILE as string;
export const googleSpreadsheetId = process.env.GOOGLE_SPREADSHEET_ID as string;

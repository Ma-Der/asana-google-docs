import dotenv from 'dotenv';
dotenv.config();

export const port = process.env.PORT as string;
export const asanaClientId = process.env.ASANA_CLIENT_ID as string;
export const asanaClientSecret = process.env.ASANA_CLIENT_SECRET as string;
export const asanaRedirectUri = process.env.ASANA_REDIRECT_URI as string;

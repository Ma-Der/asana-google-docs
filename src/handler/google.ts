import { createGoogleSheetsInstance } from '@config/google';
import { googleSpreadsheetId } from '@config/envVar';

export class GoogleHandler {
  public static async getMetadata() {
    const googleSheets = await createGoogleSheetsInstance();

    const metaData = await googleSheets.spreadsheets.get({
      spreadsheetId: googleSpreadsheetId,
    });

    return metaData.data;
  }

  public static async getRows() {
    const googleSheets = await createGoogleSheetsInstance();

    const rows = await googleSheets.spreadsheets.values.get({
      spreadsheetId: googleSpreadsheetId,
      range: 'Arkusz1!A:C',
    });

    return rows.data;
  }

  public static async addRow() {
    const googleSheets = await createGoogleSheetsInstance();
    const rowAdded = await googleSheets.spreadsheets.values.append({
      spreadsheetId: googleSpreadsheetId,
      range: 'Arkusz1!A:B',
      valueInputOption: 'USER_ENTERED',
      includeValuesInResponse: true,
      requestBody: {
        values: [['New info', '3h']],
      },
    });

    return rowAdded;
  }
}

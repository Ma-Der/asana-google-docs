import { Request, Response } from 'express';
import { GoogleHandler } from '@handler/google';

export class GoogleController {
  public static async getMetaData(_req: Request, res: Response) {
    try {
      const metaData = await GoogleHandler.getMetadata();

      return res.status(200).json(metaData);
    } catch (err: any) {
      const error = err as Error;

      return res.status(400).json(error.message);
    }
  }

  public static async getAllRows(_req: Request, res: Response) {
    try {
      const rows = await GoogleHandler.getRows();

      return res.status(200).json(rows);
    } catch (err: any) {
      const error = err as Error;

      return res.status(400).json(error.message);
    }
  }

  public static async addRow(_req: Request, res: Response) {
    try {
      const row = await GoogleHandler.addRow();

      return res.status(200).json(row);
    } catch (err: any) {
      const error = err as Error;

      return res.status(400).json(error.message);
    }
  }
}

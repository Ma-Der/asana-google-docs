import { Request, Response } from 'express';
import { AsanaHandler } from '@handler/asana';

export class AsanaController {
  public static async authorize(req: Request, res: Response) {
    const { token } = req.cookies;
    try {
      const authInfo = await AsanaHandler.authorize(token);

      if (authInfo.msg === 'reauthorize') {
        return res.redirect(authInfo.client.app.asanaAuthorizeUrl());
      }

      return res.status(200).json(`Logged in as ${authInfo.msg}`);
    } catch (err: any) {
      const error = err as Error;

      return res.status(404).json(error.message);
    }
  }

  public static async redirectCallback(req: Request, res: Response) {
    try {
      const { code } = req.query;

      const { accessToken } = await AsanaHandler.redirectCallback(
        code as string,
      );

      res.cookie('token', accessToken, { maxAge: 60 * 60 * 1000 });
      return res.redirect('/hello');
    } catch (err: any) {
      const error = err as Error;

      return res.status(404).json(error.message);
    }
  }
}

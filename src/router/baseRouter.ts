import { Router, Request, Response } from 'express';

class BaseRouter {
  router: Router;
  constructor() {
    this.router = Router();
    this.createRoutes();
  }

  createRoutes() {
    this.router.get('/hello', (_req: Request, res: Response) =>
      res.send('hello'),
    );
  }
}

const baseRouter = new BaseRouter();
export default baseRouter;

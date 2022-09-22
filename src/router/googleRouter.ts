import { Router } from 'express';
import { GoogleController } from '@controller/google';

class GoogleRouter {
  router: Router;
  constructor() {
    this.router = Router();
    this.createRoutes();
  }

  createRoutes() {
    this.router.get('/metaData', GoogleController.getMetaData);
    this.router.get('/rows', GoogleController.getAllRows);
    this.router.post('/', GoogleController.addRow);
  }
}

const googleRouter = new GoogleRouter();
export default googleRouter;

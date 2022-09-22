import { Router } from 'express';
import { AsanaController } from '@controller/asana';

class AsanaRouter {
  router: Router;
  constructor() {
    this.router = Router();
    this.createRoutes();
  }

  createRoutes() {
    this.router.get('/', AsanaController.authorize);
    this.router.get('/oauth_callback', AsanaController.redirectCallback);
    this.router.get('/tasks', AsanaController.getTasks);
  }
}

const asanaRouter = new AsanaRouter();
export default asanaRouter;

import express, { urlencoded, Express } from 'express';
import cookieParser from 'cookie-parser';
import baseRouter from '@router/baseRouter';
import asanaRouter from '@router/asanaRouter';
import errorHandler from '@middleware/errorHandler';
import { port } from './envVar';

export const initializeServer = (): express.Application => {
  const app = express();

  app.use(urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cookieParser());

  app.use('/', baseRouter.router);
  app.use('/asana', asanaRouter.router);

  app.use(errorHandler);

  startServer(app);
  return app;
};

export const startServer = (app: Express): void => {
  app.listen(port, () => console.log(`Server started at port: ${port}`));
};

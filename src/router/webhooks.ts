import { Router } from 'express';
export const webhooksRouter = Router();

// define the home page route
webhooksRouter.get('/', function (_, res) {
  res.send('webhooks home');
});

import { Request, Response, NextFunction, Router } from "express";
import statusCode from 'http-status-codes';

const statusRoute = Router();

statusRoute.get('/status', (req: Request, res: Response, next: NextFunction) => {
  res.sendStatus(statusCode.OK)
})

export default statusRoute;
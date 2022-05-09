import { Request, Response, NextFunction, Router } from "express";
import statusCode from 'http-status-codes';


const usersRoute =  Router();

usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
  const users = [{ userName: 'Jones' }];
  res.status(statusCode.OK).send({ users })
})

usersRoute.get('/users/:uuid', (req: Request<{uuid: string}>, res: Response, next: NextFunction) => {
  const uuid = req.params.uuid;
  res.status(statusCode.OK).send({ uuid })
})

usersRoute.post('/users', (req: Request, res: Response, next: NextFunction) => {
  const newUsers = req.body;
  res.status(statusCode.CREATED).send(newUsers);
})

export default usersRoute;
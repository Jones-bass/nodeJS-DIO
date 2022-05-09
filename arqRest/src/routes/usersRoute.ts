import { Request, Response, NextFunction, Router } from "express";
import statusCode from 'http-status-codes';


const usersRoute = Router();

usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
  const users = [{ userName: 'Jones' }];
  res.status(statusCode.OK).send({ users })
})

usersRoute.get('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
  const uuid = req.params.uuid;
  res.status(statusCode.OK).send({ uuid })
})

usersRoute.post('/users', (req: Request, res: Response, next: NextFunction) => {
  const newUsers = req.body;

  console.log(req.body)
  res.status(statusCode.CREATED).send(newUsers);
})

usersRoute.put('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
  const uuid = req.params.uuid;
  const modifiedUser = req.body;
  modifiedUser.uuid = uuid;

  res.status(statusCode.OK).send(modifiedUser)
})

usersRoute.delete('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
   res.sendStatus(statusCode.OK)

})

export default usersRoute;
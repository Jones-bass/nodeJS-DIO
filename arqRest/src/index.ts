import express, { Request, Response, NextFunction } from "express";
import usersRoute from "./routes/usersRoute";

const app = express();

app.use(usersRoute);

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ foo: 'OLA BB' })
});

app.listen(3000, () => {
  console.log('Node execuntando...!')
})
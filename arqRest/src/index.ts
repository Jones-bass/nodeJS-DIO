import express, { Request, Response, NextFunction } from "express";
import usersRoute from "./routes/usersRoute";

const app = express();

// Configuração da app - Convertendo o JSON
app.use(express.json());

// Configuração da Rota
app.use(usersRoute);

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ foo: 'OLA BB' })
});

// Inicialiação do Servidor
app.listen(3000, () => {
  console.log('Node execuntando...!')
})
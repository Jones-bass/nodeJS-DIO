import express from "express";
import errorHandler from "./middlewares/error-handler.middleware";
import statusRoute from "./routes/statusRoute";
import usersRoute from "./routes/usersRoute";

const app = express();

// Configuração da app - Convertendo o JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// Configuração da Rota
app.use(usersRoute);
app.use(statusRoute);

//App Config Handle Error
app.use(errorHandler);

// Inicialiação do Servidor
app.listen(3000, () => {
  console.log('Node execuntando...!')
})
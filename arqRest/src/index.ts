import express from "express";
import statusRoute from "./routes/statusRoute";
import usersRoute from "./routes/usersRoute";

const app = express();

// Configuração da app - Convertendo o JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// Configuração da Rota
app.use(usersRoute);
app.use(statusRoute);


// Inicialiação do Servidor
app.listen(3000, () => {
  console.log('Node execuntando...!')
})
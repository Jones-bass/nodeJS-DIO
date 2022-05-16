const express = require('express')
const bodyParser = require('body-parser')

const userRoute = require('./routes/useRoute')//importação do app

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false}))

userRoute(app)

app.get('/', (req, res) => res.send("Ola mundo"))

app.listen(port, ()=> console.log("Rodando na porta 3000"))
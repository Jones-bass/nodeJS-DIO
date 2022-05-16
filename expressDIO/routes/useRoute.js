const fs = require('fs')
const { join } = require('path')

const filePath = join(__dirname, 'users.json')

const getUsers = () => { //função criar usuario
  const data = fs.existsSync(filePath)
    ? fs.readFileSync(filePath)
    : []

  try {
    return JSON.parse(data)
  } catch (error) {
    return []
  }
}

//função salvar usuario
const saveUser = (users) => fs.writeFileSync(filePath, JSON.stringify(users, null, '\t'))

const userRoute = (app) => {
  app.route('/users/:id?')
  .get((req, res)  => {
    const users = getUsers()

    res.send({users})
  })
  .post((req, res) => {
    const users = getUsers()

    users.push(req.body)
    saveUser(users)

    res.status(201).send('OK')//respota da requisição
  })
  .put((req, res) => {//atualizando o user buscando o id
    const users = getUsers()

    saveUser(users.map(user => {
      if(user.id === req.params.id) {
        return {
          ...user,
          ...req.body
        }
      }
      return user
    }))
    res.status(201).send('OK')//respota da requisição

  })

  .delete((req, res) => {//atualizando o user buscando o id
    const users = getUsers()

    saveUser(users.filter(user => user.id !== req.params.id))
        
    res.status(201).send('OK')//respota da requisição
  })
}
module.exports = userRoute
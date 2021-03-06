const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.get('/', async (request, response) => {
  const users = await User // Finds all Users and "joins" in their linked notes' content and date
    .find({}).populate('notes', { content: 1, date: 1 })
  response.json(users.map(u => u.toJSON()))
})

usersRouter.post('/', async (request, response, next) => {
  try {
    const body = request.body

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.password, saltRounds)

    const user = new User({ // create a new User
      username: body.username,
      name: body.name,
      passwordHash,
    })

    const savedUser = await user.save() // save the new User

    response.json(savedUser)
  }
  catch (exception) {
    next(exception)
  }
})

module.exports = usersRouter
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const loginRouter = require('express').Router()
const User = require('../models/user')

loginRouter.post('/', async (request, response) => {
  const body = request.body

  // searches for user based on username attached to the request
  const user = await User.findOne({ username: body.username })
  // checks the password attached to the req using bcryp.compare since passes are not in db
  const passwordCorrect = user === null
    ? false
    : await bcrypt.compare(body.password, user.passwordHash)

  if (!(user && passwordCorrect)) {
    return response.status(401).json({
      error: 'invalid username or password'
    })
  }
  const userForToken = {
    username: user.username,
    id: user._id,
  }
  // if pw is correct, token is created with jwt.sign!
  // it is digitally signed using SECRET env variable
  // eslint-disable-next-line no-undef
  const token = jwt.sign(userForToken, process.env.SECRET)

  // if req is a success
  response
    .status(200)
    .send({ token, username: user.username, name: user.name })
})

module.exports = loginRouter
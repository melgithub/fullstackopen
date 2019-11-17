const config = require('./utils/config')
const express = require('express') // dictates that we need express
const bodyParser = require('body-parser')
const app = express() // creates an express app
const cors = require('cors') // middleware to allow requests from other origins
const loginRouter = require('./controllers/login')
const notesRouter = require('./controllers/notes')
const usersRouter = require('./controllers/users')
const middleware = require('./utils/middleware')
const mongoose = require('mongoose')
const logger = require('./utils/logger')

mongoose.set('useFindAndModify', false)

// DB connection
logger.info('Connecting to', config.MONGODB_URI)
mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    logger.info('Connected to MongoDB')
  })
  .catch((error) => {
    logger.error('Error connection to MongoDB:', error.message)
  })

// Calling middleware into use
app.use(cors())
app.use(express.static('build')) //middleware to serve static files such as images, CSS files, and JS files
app.use(bodyParser.json())
app.use(middleware.requestLogger)
app.use('/api/login', loginRouter)
app.use('/api/notes', notesRouter)
app.use('/api/users', usersRouter)
app.use(middleware.errorHandler)
app.use(middleware.unknownEndpoint)

module.exports = app
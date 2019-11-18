const config = require('./utils/config')
const express = require('express') // dictates that we need express
const bodyParser = require('body-parser')
const app = express() // creates an express app
const cors = require('cors') // middleware to allow requests from other origins
const loginRouter = require('./controllers/login')
const blogsRouter = require('./controllers/blogs')
const usersRouter = require('./controllers/users')
const middleware = require('./utils/middleware')
const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)

// DB connection
console.log('Connecting to', config.MONGODB_URI)
mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connection to MongoDB:', error.message)
  })

// Calling all middleware into use
app.use(cors())
app.use(express.static('build')) //middleware to serve static files such as images, CSS files, and JS files
app.use(bodyParser.json())
app.use('/api/login', loginRouter)
app.use('/api/blogs', blogsRouter)
app.use('/api/users', usersRouter)
app.use(middleware.tokenExtractor)
app.use(middleware.errorHandler)
app.use(middleware.unknownEndpoint)

module.exports = app
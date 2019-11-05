require('dotenv').config() // sets up our database env variable
const express = require('express') // dictates that we need express
const app = express() // creates an express app
const bodyParser = require('body-parser')
const cors = require('cors') // middleware to allow requests from other origins
const Note = require('./models/note')

app.use(bodyParser.json())
app.use(cors())
app.use(express.static('build')) //middleware to serve static files such as images, CSS files, and JS files

// ----- HTTP POST request
// Event handler function can access the data from the body property of the request object
// Without body-parser, the body property would be undef

// Post a new note resource
  app.post('/api/notes', (request, response, next) => {
    const body = request.body
  
    if (!body.content) {
      return response.status(400).json({ error: 'Content missing' })
    }
  
    const note = new Note({
      content: body.content,
      important: body.important || false,
      date: new Date(),
    })
  
    note.save().then(savedNote => {
      response.json(savedNote.toJSON())
    })
    .catch(error => next(error))
  })

  // ----- Routes HTTP GET requests to the specified paths with the specified callback functions
  // Get all resources
  app.get('/api/notes', (request, response) => {
    Note.find({}).then(notes => {
      response.json(notes.map(note=>note.toJSON())) // result is a new array where every item is mapped to new obj w/ toJSON method
    })
  })

  // Single resource fetch
  app.get('/api/notes/:id', (request, response, next) => {
    Note.findById(request.params.id)
      .then(note => {
        if (note) {
          response.json(note.toJSON())
        } else {
          response.status(404).end()
        }
      })
      .catch(error => next(error))
  })
  
  // Update note importance (change a resource)
  app.put('/api/notes/:id', (request, response, next) => {
    const body = request.body
  
    const note = {
      content: body.content,
      important: body.important,
    }
  
    Note.findByIdAndUpdate(request.params.id, note, { new: true })
      .then(updatedNote => {
        response.json(updatedNote.toJSON())
      })
      .catch(error => next(error))
  })

  // Single resource delete
  app.delete('/api/notes/:id', (request, response, next) => {
    Note.findByIdAndRemove(request.params.id)
      .then(result => {
        response.status(204).end()
      })
      .catch(error => next(error))
  })

  // Error handling ---
  const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'Unknown endpoint' })
  }
  app.use(unknownEndpoint)
  // handler of requests with unknown endpoint

  const errorHandler = (error, request, response, next) => {
    console.error(error.message)
  
    if (error.name === 'CastError' && error.kind === 'ObjectId') {
      return response.status(400).send({ error: 'Malformatted id' })
    } 
    else if (error.name === 'ValidationError') {
      return response.status(400).json({ error: error.message })
    }
    next(error)
  }
  app.use(errorHandler)
// handler of requests with result errors

// Port info -----------
  const PORT = process.env.PORT
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
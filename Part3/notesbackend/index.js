require('dotenv').config() // sets up our database env variable
const express = require('express') // dictates that we need express
const app = express() // creates an express app
const bodyParser = require('body-parser')
const cors = require('cors') // middleware to allow requests from other origins
const Note = require('./models/note')

app.use(express.static('build')) //middleware to serve static files such as images, CSS files, and JS files
app.use(cors())
app.use(bodyParser.json())

let notes = [
    {
      id: 1,
      content: "HTML is easy",
      date: "2019-05-30T17:30:31.098Z",
      important: true
    },
    {
      id: 2,
      content: "Browser can execute only Javascript",
      date: "2019-05-30T18:39:34.091Z",
      important: false
    },
    {
      id: 3,
      content: "GET and POST are the most important methods of HTTP protocol",
      date: "2019-05-30T19:20:14.298Z",
      important: true
    }
  ]

  const generateId = () => {
    const maxId = notes.length > 0
      ? Math.max(...notes.map(n => n.id))
      : 0
    return maxId + 1
  }

  // ----- HTTP POST request
  // Event handler function can access the data from the body property of the request object
  // Without body-parser, the body property would be undef

  app.post('/api/notes', (request, response) => {
    const body = request.body
  
    if (body.content === undefined) {
      return response.status(400).json({ error: 'content missing' })
    }
  
    const note = new Note({
      content: body.content,
      important: body.important || false,
      date: new Date(),
    })
  
    note.save().then(savedNote => {
      response.json(savedNote.toJSON())
    })
  })
  

  // ----- Routes HTTP GET requests to the specified paths with the specified callback functions
  // app.get('/', (req, res) => {
  //   res.send('<h2>Hello World!</h2>')
  // })

  app.get('/api/notes', (request, response) => {
    Note.find({}).then(notes => {
      response.json(notes.map(note=>note.toJSON())) // result is a new array where every item is mapped to new obj w/ toJSON method
    })
  })

  // Single resource fetch
  app.get('/api/notes/:id', (request, response) => {
    Note.findById(request.params.id)
      .then(note => {
        if (note) {
          response.json(note.toJSON())
        } else {
          response.status(404).end() 
        }
      })
      .catch(error => {
        console.log(error)
        response.status(400).send({ error: 'Incorrectly formatted ID' })
      })
  })

  // Single resource delete
  app.delete('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    notes = notes.filter(note => note.id !== id)
    response.status(204).end()
  })

  // -----

  const PORT = process.env.PORT
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
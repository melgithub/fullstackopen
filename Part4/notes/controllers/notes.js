// Controller for HTTP Routes
const notesRouter = require('express').Router() // creating a new router object
const Note = require('../models/note')

// GET all resources
// notesRouter.get('/', (request, response) => {
//   Note.find({}).then(notes => {
//     response.json(notes.map(note => note.toJSON())) // result is a new array where every item is mapped to new obj w/ toJSON method
//   })
// })

notesRouter.get('/', async (request, response) => {
  const notes = await Note.find({})
  response.json(notes.map(note => note.toJSON()))
})

// Single resource fetch
notesRouter.get('/:id', (request, response, next) => {
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

// Post a new note resource
notesRouter.post('/', (request, response, next) => {
  const body = request.body

  if (!body.content) {
    return response.status(400).json({ error: 'Content missing' })
  }

  const note = new Note({
    content: body.content,
    important: body.important || false,
    date: new Date(),
  })

  note.save() // promise chaining
    .then(savedNote => savedNote.toJSON())
    .then(savedAndFormattedNote => {
      response.json(savedAndFormattedNote)
    })
    .catch(error => next(error))
})

// Update note importance (change a resource)
notesRouter.put('/:id', (request, response, next) => {
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
notesRouter.delete('/:id', (request, response, next) => {
  Note.findByIdAndRemove(request.params.id)
    .then(() => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

module.exports = notesRouter
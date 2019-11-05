if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}
const express = require('express') 
const app = express()
const bodyParser = require('body-parser')
const morganBody = require('morgan-body')
const cors = require('cors')
const Person = require('./models/person')

// Middleware
app.use(cors()) 
app.use(express.static('build'))
app.use(bodyParser.json())
morganBody(app)

// ---- HTTP GET Requests
app.get('/info', (req, res) => {
    const date = new Date();
    res.send(`Phonebook contains info for ${persons.length} people.<br><br>${date}`)
})

app.get('/api/persons', (req, res) => {
    Person.find({}).then(persons => {
        res.json(persons.map(p=>p.toJSON()))
    })
})
// -- Getting individual person
app.get('/api/persons/:id', (req, res, next) => {
    Person.findById(req.params.id).then(person => {
        if (person) {
            res.json(person.toJSON())
        } else {
            res.status(404).end()
        }
        })
        .catch(error => next(error))
    })

// ---- HTTP POST Request
app.post('/api/persons', (req, res, next) => {
    const body = req.body

    const person = new Person ({ // constructor
        name: body.name,
        number: body.number,
    })
    
    person.save()
    .then(savedPerson => savedPerson.toJSON())
    .then(savedAndFormattedPerson => {
        res.json(savedAndFormattedPerson)
    })
    .catch(error => next(error))
})
// ---- HTTP PUT Request
app.put('/api/persons/:id', (request, response, next) => {
    const body = request.body

    const person = {
        name: body.name,
        number: body.number,
    }

    Person.findByIdAndUpdate(request.params.id, person, { new: true })
    .then(updatedPerson => updatedPerson.toJSON())
    .then(updatedAndFormattedPerson => {
        response.json(updatedAndFormattedPerson)
    })
    .catch(error => next(error))
})

// ---- HTTP DELETE Requests
app.delete('/api/persons/:id', (req, res, next) => {
    Person.findByIdAndRemove(req.params.id)
    .then(result => {
        res.status(204).end()
    })
    .catch(error => next(error))
})

// Error handling middleware ---
const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'Unknown endpoint' })
}
app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
    console.error(error.message)
    if (error.name === 'CastError' && error.kind == 'ObjectId') {
        return response.status(400).send({ error: 'malformatted id' })
    }
    else if (error.name === 'ValidationError') {
        return response.status(400).json({ error: error.message })
    }
    next(error)
}
app.use(errorHandler)

// ---- Server port info
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

const express = require('express') // dictates that we need express
const app = express() // creates an express app
const bodyParser = require('body-parser')
const morgan = require('morgan')

// Middleware 
app.use(bodyParser.json())
app.use(morgan("tiny"))

//#region PHONEBOOK DATA
let persons = [
        {
        name: "Jennifer Honey",
        number: "555-3332",
        id: 1
        },
        {
        name: "Agatha Trunchbull",
        number: "911-888-2222",
        id: 2
        },
        {
        name: "Bruce Bogtrotter",
        number: "434-9232",
        id: 3
        },
        {
        name: "Matilda Wormwood",
        number: "543-6554",
        id: 4
        },
        {
        name: "Amanda Thripp",
        number: "390-431-222",
        id: 5
        }
    ]
    //#endregion

    // ---- HTTP GET REQUESTS
    app.get('/', (req, res) => {
        res.send('<h1>3.7: Phonebook backend, Step 7</h1>')
    })

    app.get('/info', (req, res) => {
        const date = new Date();
        res.send(`Phonebook contains info for ${persons.length} people.<br><br>${date}`)
    })

    app.get('/api/persons', (req, res) => {
        res.json(persons)
    })

    app.get('/api/persons/:id', (req, res) => {
        const id = Number(req.params.id) // If we don't cast as Number, we get a var mismatch and won't get the person
        const person = persons.find(person => person.id === id)

        if (person) { // If object is truthy (not null/undef)
            res.json(person)
        }
        else {
            app.use(unknownEndpoint)
        }
    })

    // ---- HTTP POST REQUEST
    const generateID = () => {
        const maxId = persons.length > 0
          ? Math.max(...persons.map(n => n.id))
          : 0
        return maxId + 1
      }
      
    app.post('/api/persons', (req, res) => {
        const body = req.body
        
        if (!body.name){ // won't work if name or number missing.
            return res.status(400).json({
                error: 'Name missing!'
            })
        }
        else if (!body.number){ // won't work if name or number missing.
            return res.status(400).json({
                error: 'Number missing!'
            })
        }
        else if (persons.find(p => p.name === body.name)){
            return res.status(400).json({
                error: `${body.name} already in phonebook.`
            })
        }

        const person = { // constructor
            name: body.name,
            number: body.number,
            id: generateID(),
        }
        persons = persons.concat(person)
        res.json(person)
    })

    // ---- HTTP DELETE REQUESTS
    app.delete('/api/persons/:id', (req, res) => {
        const id = Number(req.params.id)
        persons = persons.filter(person => person.id !== id)
        res.status(204).end()
    })

    // ---- SERVER PORT INFO
    const PORT = 3001
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })

const express = require('express') // dictates that we need express
const app = express() // creates an express app

let persons = [
        {
        name: "Jennifer Honey",
        number: "555-3332",
        id: 6
        },
        {
        name: "Agatha Trunchbull",
        number: "911-888-2222",
        id: 7
        },
        {
        name: "Bruce Bogtrotter",
        number: "434-9232",
        id: 8
        },
        {
        name: "Matilda Wormwood",
        number: "543-6554",
        id: 9
        },
        {
        name: "Amanda Thripp",
        number: "390-431-222",
        id: 10
        }
    ]

    app.get('/', (req, res) => {
        res.send('<h1>3.2: Phonebook backend, Step 2</h1>')
    })

    app.get('/info', (req, res) => {
        const date = new Date();
        res.send(`Phonebook contains info for ${persons.length} people.<br><br>${date}`)
    })

    app.get('/api/persons', (req, res) => {
        res.json(persons)
    })

    const PORT = 3001
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })

import React, { useState } from 'react'
import Person from './Components/Person'

const App = () => {
  // array, starts empty.
  const [ persons, setPersons] = useState([])
  // new person name, pre-filled with a message.
  const [ newName, setNewName ] = useState('Type your name')

  // button event handler
  const addPerson = (event) => {
    event.preventDefault() // Stops page from refreshing when submitting
    const personObject = { // New person object
      content: newName,
      id: persons.length + 1, // Temporary solution to assign ID for each person
    }

    setPersons(persons.concat(personObject)) // adds new person object to new array
    setNewName('Type your name') // sets box back to this message after each submit
  }

  const handleNewPersonEvent = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  // Maps our persons array to our Person component
  const entry = () => persons.map(person => 
    <Person
      key={person.id}
      person={person}/>
      )
  
  // What we see
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}> 
        <div>
          Name: <input
            value={newName}
            onChange={handleNewPersonEvent}/>
        </div>
        <div>
          <button>Add</button>
        </div>

      </form>
      <h3>Numbers</h3>
      <ul>
        {entry()}
      </ul>
    </div>
  )
}

export default App
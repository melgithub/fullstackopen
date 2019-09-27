import React, { useState } from 'react'
import Person from './Components/Person'

const App = () => {
  const [ persons, setPersons] = useState([])  // array, starts empty.
  const [ newName, setNewName ] = useState('')
  const [ newPhoneNumber, setNewPhoneNumber ] = useState('')

  // button event handler
  const addPerson = (event) => {
    event.preventDefault() // Stops page from refreshing when submitting

    if (persons.find(person => person.name === newName))
    {
      window.alert(`${newName} is already in the phonebook!`);
    }
    else 
    {
      console.log('New Name: ', newName)
      const personObject = { // Create new person object
        name: newName,
        phone: newPhoneNumber,
      }
      setPersons(persons.concat(personObject)) // Adds person object to new array
    }
    setNewName('') 
    setNewPhoneNumber('') 
  }

  // Updates setNewName as user types in the form
  const handleNewPersonEvent = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNewPhoneNumberEvent = (event) => {
    console.log(event.target.value)
    setNewPhoneNumber(event.target.value)
  }

  // Maps our persons array to our Person component
  const entry = () => persons.map(person => 
    <Person
      key={person.name}
      person={person}/>
      )
  
  // What we see
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}
            value={newName}> 
        <div>
          Name: <input
            value={newName}
            onChange={handleNewPersonEvent}/>
        </div>
        <div>
          Phone: <input
            value={newPhoneNumber}
            onChange={handleNewPhoneNumberEvent}/>
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
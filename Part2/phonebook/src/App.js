import React, { useState } from 'react'
import Person from './Components/Person'

const App = () => {
  const [ persons, setPersons] = useState([])  // array, starts empty
  const [ newName, setNewName ] = useState('')
  const [ newPhoneNumber, setNewPhoneNumber ] = useState('')
  const [ showAll, setShowAll] = useState(true) // true by default
  const [ filter, setFilter] = useState('') // contents of our filter

  // Add button event handler
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

  // Updates setNewName, setPhoneNumber and setFilter as user types in the forms
  const handleNewPersonEvent = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
    setShowAll(true)
  }
  const handleNewPhoneNumberEvent = (event) => {
    console.log(event.target.value)
    setNewPhoneNumber(event.target.value)
  }
  const handleFilterEvent = (event) => {
    setFilter(event.target.value.toLowerCase()) // converts to lowercase for easier checking
    setShowAll(false) // we only want to see filtered results
  }

  // Maps our array of people to show to our Person component
  const entry = () => peopleToShow.map(person => 
    <Person
      key={person.name}
      person={person}/>
      )
  
  // If showAll is true, we show full list. Otherwise, we filter!
  const peopleToShow = showAll
  ? persons
  : persons.filter(person => person.name.toLowerCase().search(filter) !== -1) // if -1, no match is found.

  // What we see
  return (
    <div>
      <h2>React Phonebook</h2>
      <div>
          Filter by name: <input
            value={filter}
            onChange={handleFilterEvent}/>
      </div>
      <h3>Add new contact</h3>
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
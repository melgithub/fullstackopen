import React, { useState } from 'react'
import Filter from './Components/Filter'
import PersonForm from './Components/PersonForm'
import Entries from './Components/Entries'

const App = () => {
  // States
  const [ persons, setPersons] = useState([])  // array, starts empty
  const [ newName, setNewName ] = useState('')
  const [ newPhoneNumber, setNewPhoneNumber ] = useState('')
  const [ showAll, setShowAll] = useState(true) // true by default
  const [ filter, setFilter] = useState('') // contents of our filter

  // List generated based on state
  // If showAll is true, we show full list. Otherwise, we get a filtered list.
  const peopleToShow = showAll
  ? persons
  : persons.filter(person => person.name.toLowerCase().search(filter) !== -1) // -1 just means no match is found.

  // Event handlers
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
  }
  const handleNewPhoneNumberEvent = (event) => {
    console.log(event.target.value)
    setNewPhoneNumber(event.target.value)
  }
  const handleFilterEvent = (event) => {
    setFilter(event.target.value.toLowerCase()) // converts to lowercase for easier checking
    setShowAll(false) // we only want to see filtered results
  }

  // What the app renders - Components are stored as other js files.
  return (
    <div>
      <h2>React Phonebook</h2>
      <Filter
        value={filter}
        onChange={handleFilterEvent}/>

      <h3>Add new contact</h3>
      <PersonForm
        onSubmit={addPerson}
        name={newName}
        number={newPhoneNumber}
        handleNameEvent={handleNewPersonEvent}
        handleNumberEvent={handleNewPhoneNumberEvent}/>

      <h3>Numbers</h3>
      <ul>
        <Entries
          list={peopleToShow}/>
      </ul>
    </div>
  )
}

export default App
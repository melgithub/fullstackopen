import React, { useState, useEffect } from 'react'
import Filter from './Components/Filter'
import PersonForm from './Components/PersonForm'
import Entries from './Components/Entries'
import personService from './Services/persons' 

const App = () => {
  // States
  const [ persons, setPersons] = useState([])  // array, starts empty
  const [ newName, setNewName ] = useState('')
  const [ newPhoneNumber, setNewPhoneNumber ] = useState('')
  const [ showAll, setShowAll] = useState(true) // true by default
  const [ filter, setFilter] = useState('') // contents of our filter

  // Fetching persons from server
  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
    })
  }, [])

  console.log('Rendered: ', persons.length, 'persons')

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
      const personObject = { // Create new person object
        name: newName,
        number: newPhoneNumber,
      }
      personService
        .create(personObject)
        .then(response => {
          setPersons(persons.concat(response.data))
        })
    }
    setNewName('') 
    setNewPhoneNumber('') 
  }

  const deletePerson = (id, name) => {
    console.log("Clicked delete " + id)
    //window.confirm(`Permanently delete ${name}?`);
    let confirmation = window.confirm(`Permanently delete ${name}?`);
    if (confirmation){
      personService
      .handleDelete(id)
      .then(
        setPersons(persons.filter(person => person.id !== id))
      )
    }
    else {
      window.alert(`${name} was not deleted.`)
    }
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
          list={peopleToShow}
          buttonAction={deletePerson}/>
      </ul>
    </div>
  )
}

export default App
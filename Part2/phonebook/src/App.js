import React, { useState, useEffect } from 'react'
import Filter from './Components/Filter'
import PersonForm from './Components/PersonForm'
import Entries from './Components/Entries'
import personService from './Services/persons' 
import Notification from './Components/Notification'

const App = () => {
  // States
  const [ persons, setPersons] = useState([])  // array, starts empty
  const [ newName, setNewName ] = useState('')
  const [ newPhoneNumber, setNewPhoneNumber ] = useState('')
  const [ showAll, setShowAll] = useState(true) // true by default
  const [ filter, setFilter] = useState('') // contents of our filter
  const [confirmationMessage, setConfirmationMessage] = useState(null) // text to appear
  const [ messageType, setMessageType ] = useState('') // msg type - success or error?

  // Fetching persons from server
  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
    }) 
    .catch(error => {
      setMessageType('error')
      setConfirmationMessage('Failed fetching data.')
    })
  }, [])

  // List generated based on state
  const peopleToShow = showAll
  ? persons
  : persons.filter(person => person.name.toLowerCase().search(filter) !== -1)

  // Event handlers
  const addPerson = (event) => {
    event.preventDefault() // Stops page from refreshing when submitting
    
    if (persons.find(person => person.name === newName))
    {
      let confirm = window.confirm(`${newName} already exists. Would you like to update their phone number?`);
      if (confirm){
        const person = persons.find(person => person.name === newName)
        const changedPerson = { ...person, number: newPhoneNumber}
        
        personService
        .update(person.id, changedPerson) // Updating backend
        .then(response => {  // Rendering to page
          setPersons(persons.filter(person => person.name !== newName).concat(response.data))
        })
        .catch(error => {
          setMessageType('error')
          setConfirmationMessage(`${newName} has already been deleted from the server.`)
        })
      }
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
          setMessageType('success')
          setConfirmationMessage(`Contact ${newName} updated.`)
          setTimeout(() => {
          setConfirmationMessage(null)
          }, 5000);
        })
        .catch(error => {
          console.log(error.response.data)
          setMessageType('error')
          setConfirmationMessage('Entry not valid.')
        })
    }
    setNewName('') 
    setNewPhoneNumber('') 
  }

  const deletePerson = (id, name) => {
    let confirmation = window.confirm(`Permanently delete ${name}?`);
    if (confirmation){
      personService
      .handleDelete(id)
      .then(
        setPersons(persons.filter(person => person.id !== id)),
        setMessageType('success'),
        setConfirmationMessage(`${name} deleted from the server.`),
        setTimeout(() => {
          setConfirmationMessage(null)
        }, 5000)
      )
      .catch(error => {
        setMessageType('error')
        setConfirmationMessage(`${name} has already been deleted from the server.`)
      })
    }
  }

  // Updates setNewName, setPhoneNumber and setFilter as user types into forms
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

  // What the app renders - Components are imported as other .js files.
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

      <Notification
        message={confirmationMessage}
        msgType={messageType}/>

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
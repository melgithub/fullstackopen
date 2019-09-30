import React from 'react'
import Person from './Person'

// Responsible for mapping our array of people to the Person component

export default ({ list }) => 
list.map(person => (
<Person
    key={person.name}
    name={person.name}
    phone={person.phone}
    />
))
import React from 'react'
import Person from './Person'

// Responsible for mapping our array of people to the Person component

export default ({ list, buttonAction }) => 
list.map(person => (
<Person
    key={person.name}
    name={person.name}
    number={person.number}
    id={person.id}
    buttonAction = {buttonAction}
    />
))
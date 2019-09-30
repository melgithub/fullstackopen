import React from 'react'

// Responsible for display of an individual person; used in the Entries component.

const Person = ({ name, phone }) => {
    return (
        <li>{name} - {phone}</li>
    )
}

export default Person
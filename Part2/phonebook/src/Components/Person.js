import React from 'react'

// Responsible for display of an individual person; used in the Entries component.

const Person = ({ name, number }) => {
    return (
        <li>{name} - {number}</li>
    )
}

export default Person
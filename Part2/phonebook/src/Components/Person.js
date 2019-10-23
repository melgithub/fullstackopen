import React from 'react'

// Responsible for display of an individual person; used in the Entries component.

const Person = ({ name, number, buttonAction, id }) => {
    return (
        <li>
            {name} - {number} 
            <button onClick={() => buttonAction(id, name)}>Delete</button>
        </li>
    )
}

export default Person
import React from 'react'

const Note = ({ note, toggleImportance }) => {
    const label = note.important
    ? 'make not-important' : 'make important'


    return (
        <li className='note'>
            {note.content}
            <button onClick={toggleImportance}>{label}</button>
        </li>
    )
}

// This line exports the declared module, the variable Note, so it can be imported elsewhere.
export default Note
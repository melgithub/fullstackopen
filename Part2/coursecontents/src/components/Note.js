import React from 'react'

const Note = ({ note }) => {
    return (
        <li>{note.content}</li>
    )
}

// This line exports the declared module, the variable Note, so it can be imported elsewhere.
export default Note
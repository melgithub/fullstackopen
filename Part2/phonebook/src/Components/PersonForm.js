
import React from 'react'

// Responsible for displaying the name and phone number form, inputs and submit button

const PersonForm = ({onSubmit, name, number, handleNameEvent, handleNumberEvent}) => {
    return (
    <form onSubmit={onSubmit}> 
        <div>
        Name: <input
            value={name}
            onChange={handleNameEvent}/>
        </div>
        <div>
        Phone: <input
            value={number}
            onChange={handleNumberEvent}/>
        </div>

        <div>
            <button>Add</button>
        </div>
   </form>
    )
}

export default PersonForm

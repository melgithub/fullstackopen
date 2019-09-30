
import React from 'react'

// Responsible for input field that manages the name filtering system

const Filter = ({value, onChange}) => {
    return (
    <div>
        Filter by name: <input
          value={value}
          onChange={onChange}/>
    </div>
    )
}

export default Filter

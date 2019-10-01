import React from 'react'

// Component for the display of countries

const CountryQueryList = (props) => {
    return (
    <div>
      <label>- {props.name}</label>
       <button
        value={props.name}
        onClick={props.onClick}>Show</button>
    </div> 
    )
  }

  export default CountryQueryList
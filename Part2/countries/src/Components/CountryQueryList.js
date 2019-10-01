import React from 'react'

// Component for the display of countries

const CountryQueryList = (countryData) => {
    return (
    <div>
      <label>- {countryData.name}</label> <button>Show</button>
    </div> 
    )
  }

  export default CountryQueryList
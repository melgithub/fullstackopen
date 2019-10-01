import React from 'react'
import LanguageList from './LanguageList'

// Component for the display of a single country

const CountryIndividual = ({ name,capital,population,flag,langauges }) => {
    return (
      <div>
        <h2>{name}</h2>
        <p><b>Capital:</b> {capital}</p>
        <p><b>Population:</b> {population.toLocaleString()}</p>
        <img
          alt='country flag'
          width={100}
          src={flag}/>
        <h3>Languages</h3>
        <ul>
            <LanguageList 
              list={langauges}/>
        </ul>
      </div>
    )
  }

  export default CountryIndividual
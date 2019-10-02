import React from 'react'
import LanguageList from './LanguageList'
import Weather from './Weather'

// Component for the display of a single country

const CountryIndividual = (props) => {
    return (
      <div>
        <h2>{props.name}</h2>
        <p><b>Capital:</b> {props.capital}</p>
        <p><b>Population:</b> {props.population.toLocaleString()}</p>
        <img
          alt='country flag'
          width={100}
          src={props.flag}/>
        <h3>Languages</h3>
        <ul>
            <LanguageList 
              list={props.langauges}/>
        </ul>
        <Weather 
          weather={props.weather}
          capital={props.capital}/>
      </div>
    )
  }

  export default CountryIndividual
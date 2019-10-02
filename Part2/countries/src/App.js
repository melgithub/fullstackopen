import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import CountryDisplayLogic from './Components/CountryDisplayLogic'

const App = () => {
  //State
  const [filter, setFilter] = useState('')
  const [showSearchResults, setShowSearchResults] = useState(false)
  const [countries, setCountries] = useState([]) 

  // Data URL variables
  const restCountriesURL='https://restcountries.eu/rest/v2/all'

  const weatherParams = {
    access_key: '31e0cbac02e8a15a9cfd48af8ad7991d',
    query: 'Los Angeles'
  }
  
  axios.get('https://api.weatherstack.com/current', {weatherParams})
  .then(response => {
    console.log(`Current temperature in ${response.data.location.name} }`);
  }).catch(error => {
    console.log("Error message:",error);
  });

  useEffect(() => {
    console.log('Effect executed')
    axios
      .get(restCountriesURL)
      .then( response => {
        console.log('Countries - Promise fulfilled')
        setCountries(response.data)
      })
    },[])
  console.log(countries.length, "countries")

  // Modified array variable
  const countriesToShow = showSearchResults
  ? countries.filter(c => c.name.toLowerCase().search(filter) !== -1)
  : []

  const handleShowButtonEvent = (event) => {
    setFilter(event.target.value.toLowerCase())
  }

  const handleFilterEvent = (event) => {
    setFilter(event.target.value.toLowerCase()) // converts to lowercase for easier checking
    setShowSearchResults(true)
  }

  return (
    <div>
    <h1>React WorldBook</h1>
    <label>Find a country: </label>
    <input
      value={filter}
      onChange={handleFilterEvent}/>

    <p><small>Results: {countriesToShow.length}</small></p>

    <CountryDisplayLogic 
          list={countriesToShow}
          clickEvent={handleShowButtonEvent}/>
    </div>
  )
}

export default App

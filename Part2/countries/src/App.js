import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import CountryDisplayLogic from './Components/CountryDisplayLogic'

const App = () => {

  const [filter, setFilter] = useState('')
  const [showSearchResults, setShowSearchResults] = useState(false)
  const [countries, setCountries] = useState([]) 

  const countriesToShow = showSearchResults
  ? countries.filter(c => c.name.toLowerCase().search(filter) !== -1)
  : []

  useEffect(() => {
    console.log('Effect executed')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then( response => {
        console.log('Promise fulfilled')
        setCountries(response.data)
      })
  },[])
  console.log(countries.length, "countries")

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
          list={countriesToShow}/>
    </div>
  )
}

export default App

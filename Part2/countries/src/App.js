import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import CountryDisplayLogic from './Components/CountryDisplayLogic'

const App = () => {
  //State
  const [filter, setFilter] = useState('')
  const [showSearchResults, setShowSearchResults] = useState(false)
  const [countries, setCountries] = useState([]) 
  const [currentTemp, setTemp] = useState('');
  const [currentWind, setWind] = useState('');
  const [currentIcon, setIcon] = useState('');

  // Data URL variables
  const restCountriesURL='https://restcountries.eu/rest/v2/all'

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

  let params = {
    access_key: '31e0cbac02e8a15a9cfd48af8ad7991d',
    query: ''
  }

  function setWeatherData(city) {
    return(
      params.query=city,
      axios.get('http://api.weatherstack.com/current', {params})
      .then(response => {
        const r = response.data;
        setTemp(r.current.temperature)
        setWind(r.current.wind_speed)
        setIcon(r.current.weather_icons)
        console.log(`Current temperature in ${r.location.name} is ${r.current.temperature}℃`);
      }).catch(error => {
        console.log(error);
      })
    )
  }

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
          clickEvent={handleShowButtonEvent}
          setData={setWeatherData}
          temp={currentTemp}
          wind={currentWind}
          icon={currentIcon}
         />
    </div>
  )
}

export default App

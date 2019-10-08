import React from 'react'

// Component for the display of weather data

const Weather = (props) => {
    
    props.setData(props.capital)

    return (
      <div>
        <h2>Weather in {props.capital}</h2>
        <p><b>Temperature:</b> {props.temp} Celsius</p>
        <p><b>Wind:</b> {props.wind} km / h</p>
        <img
          alt='weather icon'
          width={60}
          src={props.icon}/>
      </div>
    )
  }

  export default Weather
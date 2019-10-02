import React from 'react'

// Component for the display of weather data

const Weather = (props) => {
    return (
      <div>
        <h2>Weather in {props.capital}</h2>
        <p><b>Temperature:</b> add data</p>
        <p><b>Wind:</b> add data</p>
        <img
          alt='weather icon'
          width={50}
          src={props.flag}/>
      </div>
    )
  }

  export default Weather
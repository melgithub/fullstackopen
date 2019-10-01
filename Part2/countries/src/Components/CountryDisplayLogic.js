import React from 'react'
import CountryIndividual from './CountryIndividual'
import CountryQueryList from './CountryQueryList'

// Responsible for determining the display method for our countries

const CountryDisplayLogic = ({ list }) => {
        if (list.length === 0 || list.length >= 250){
            return null
        }
        else if (list.length > 10){
            return <h3>Too many matches, refine your search.</h3>
        }
        else if (list.length < 10 && list.length > 1){
            return (
            list.map(country => (
                <CountryQueryList
                    key={country.name}
                    name={country.name}
                    />
                )
            )
            )   
        }
        else if (list.length === 1){
            return (
            list.map(country => (
                <CountryIndividual
                    key={country.name}
                    name={country.name}
                    capital={country.capital}
                    population={country.population}
                    flag={country.flag}
                    langauges={country.languages}
                    />
                )
            )
            )   
        }
        else {
            return <h3>No countries match your search criteria.</h3>
        }
}

export default CountryDisplayLogic

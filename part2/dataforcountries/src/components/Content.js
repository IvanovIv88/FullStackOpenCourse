import React from 'react'

const Content = ({ countries, newSearch }) => {

    const filteredCountries = newSearch ? countries.filter(country => country.name.toLowerCase().includes(newSearch.toLowerCase())) : false

    if (filteredCountries.length > 10) {
        return (
            <>
                Too many matches, specify another filter
            </>
        )
    } else if (filteredCountries.length < 10 && filteredCountries.length > 1) {
        return (
            <>
                {filteredCountries.map((country, index) => <div key={index}>{country.name}</div>)}
            </>
        )
    } else if (filteredCountries.length === 1) {
        const country = filteredCountries[0]

        return (
            <>
                <h1>{country.name}</h1>
                <div>{`capital ${country.capital}`}</div>
                <div>{`population ${country.population}`}</div>
                <h2>languages</h2>
                <ul>
                    {country.languages.map((language, index) => (<li key={index}>{language.name}</li>))}
                </ul>
                <img border="1" alt='' src={country.flag} width="150" height="100"></img>
            </>
        )
    }

    else {
        return null
    }

}

export default Content
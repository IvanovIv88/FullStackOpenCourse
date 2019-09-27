import React from 'react'

const CountryInfo = ({country}) => {
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

export default CountryInfo
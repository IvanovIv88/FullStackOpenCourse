import React, { useState, useEffect } from 'react'

import CountryInfo from './CountryInfo'

const Content = ({ countries, newSearch }) => {
    const [countryInfo, setCountryInfo] = useState('')

    useEffect(() => {
        setCountryInfo('')
    }, [newSearch])

    const setToShowCountryInfo = (country) => {
        setCountryInfo(country)
    }

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
                {filteredCountries.map((country, index) =>
                    <>
                        <div key={index}>{country.name}
                            <button key={index} onClick={() => setToShowCountryInfo(country)}>show</button>
                        </div>

                    </>
                )}
                {countryInfo ? <CountryInfo country={countryInfo} /> : null}
            </>
        )
    } else if (filteredCountries.length === 1) {
        const country = filteredCountries[0]

        return (
            <CountryInfo country={country} />
        )
    }
    else {
        return null
    }

}

export default Content
import React, { useState, useEffect } from 'react'
import axios from 'axios';

const CountryInfo = ({ country }) => {
    const [weather, setWeather] = useState('')

    const accessKey = "ab95b3bba6dbdfdc2a9f6e612b2cbb82"

    // async function fetchWeatherAPI() {
    //     const response = await axios.get(`http://api.weatherstack.com/current?access_key=${accessKey}&query=${country.capital}`)
    //     setWeather(response.data)
    // }

    useEffect(() => {
        axios
            .get(`http://api.weatherstack.com/current?access_key=${accessKey}&query=${country.capital}`)
            .then(response => {
                setWeather(response.data)
            })
    }, [country])

    // const {temperature, weather_icons, wind_speed, wind_dir} = weather.current

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
            <h1>{`Weather in ${country.capital}`}</h1>
            {weather ? (
                <>
                <div>{`temperature: ${weather.current.temperature}`}</div> 
                <img alt='' src={weather.current.weather_icons} width="60" height="60"></img>
                <div>{`wind: ${weather.current.wind_speed} kph direction ${weather.current.wind_dir}`}</div>
                </>)
                
            : null}

        </>
    )
}

export default CountryInfo
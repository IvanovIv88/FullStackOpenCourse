import React, { useState, useEffect } from 'react'
import axios from 'axios';

import Search from './components/Search'
import Content from './components/Content';

const App = () => {
  const [countries, setCountries] = useState([])
  const [newSearch, setNewSearch] = useState('')

  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
  }

  useEffect(() => {
      axios
        .get('https://restcountries.eu/rest/v2/all')
        .then(response => {
          setCountries(response.data)
        })
  }, [])


  return (
    <div>
      <Search newSearch={newSearch} handleSearchChange={handleSearchChange} />
      <Content countries={countries} newSearch={newSearch} />
    </div>
  )
}

export default App

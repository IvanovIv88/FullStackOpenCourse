import React, { useState, useEffect } from 'react'
import phonebookService from './services/phonebookService'

import Persons from './components/Persons';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    phonebookService
      .getAll()
      .then(response => [
        setPersons(response.data)
      ])
  }, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    const checkDublicates = persons.filter(persons => persons.name === newName)

    if (!checkDublicates.length) {
      const phonebookObject = {
        name: newName,
        number: newNumber
      }
      phonebookService
       .create(phonebookObject)
       .then(response => setPersons(
          persons.concat(response.data),
       ))
       
       setNewName('')
       setNewNumber('')
    } else {
      alert(`${newName} is already added to phonebook`)
    }

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />
      <h3>Add a new</h3>
      <PersonForm
        addName={addName}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} newFilter={newFilter} />
    </div>
  )
}

export default App
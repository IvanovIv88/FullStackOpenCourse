import React, { useState } from 'react'

import Persons from './components/Persons';
import PersonForm from './components/PersonForm';
// import PersonForm from './components/PersonForm';



const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    const checkDublicates = persons.filter(persons => persons.name === newName)

    if (!checkDublicates.length) {
      const nameObject = {
        name: newName,
      }

      setPersons(persons.concat(nameObject))
      setNewName('')
    } else {
      alert(`${newName} is already added to phonebook`)
    }

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <PersonForm addName={addName} newName={newName} handleNameChange={handleNameChange}></PersonForm>
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  )
}

export default App
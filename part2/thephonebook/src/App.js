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
    const nameObject = {
      name: newName,
    }

    setPersons(persons.concat(nameObject))
    setNewName('')
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
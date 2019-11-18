import React, { useState, useEffect } from 'react'
import phonebookService from './services/phonebookService'

import Persons from './components/Persons';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';
import Notification from './components/Notification';

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [message, setMessage] = useState(null);
  const [meesageColor, setMessageColor] = useState('')

  useEffect(() => {
    phonebookService
      .getAll()
      .then(initialPersons => [
        setPersons(initialPersons)
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
        .createPerson(phonebookObject)
        .then(returnedPerson => setPersons(
          persons.concat(returnedPerson),
        ))
      setMessageColor('green')
      setMessage(`Added ${phonebookObject.name}`);
      setTimeout(() => {
        setMessage(null)
      }, 4000)

      setNewName('')
      setNewNumber('')
    } else {
      const dublicateObject = checkDublicates[0];
      const message = `${dublicateObject.name} is alredy added to phonebook, replace the old number with a new one?`
      const result = window.confirm(message)

      if (result) {
        const newPhonebookObject = {
          ...dublicateObject,
          number: newNumber
        }

        phonebookService
          .updatePerson(dublicateObject.id, newPhonebookObject)
          .then(returnedPerson => setPersons(persons.map(person => person.id !== dublicateObject.id ? person : newPhonebookObject)))
          .catch(error => {
            setMessageColor('red')
            setMessage(`Information of ${newPhonebookObject.name}' has already been removed from server`);
            setTimeout(() => {
              setMessage(null)
            }, 4000)
          })
        setMessageColor('green')
        setMessage(`Changed ${newPhonebookObject.name}'s number`);
        setTimeout(() => {
          setMessage(null)
        }, 4000)
        setNewName('')
        setNewNumber('')
      }
    }
  }

  const deleteName = (id, name) => {
    const message = `Delete ${name} ?`
    const result = window.confirm(message)
    if (result) {
      phonebookService
        .deletePerson(id)
        .then(deletedPerson => setPersons(persons.filter(persons => persons.id !== id)))
        .catch(error => {
          setMessageColor('red')
          setMessage(`Information of ${name}' has already been removed from server`);
          setTimeout(() => {
            setMessage(null)
          }, 4000)
        })
    } else {
      return
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} color={meesageColor} />
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
      <Persons persons={persons} newFilter={newFilter} deleteName={deleteName} />
    </div>
  )
}

export default App
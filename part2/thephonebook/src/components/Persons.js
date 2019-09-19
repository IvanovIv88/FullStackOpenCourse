import React from 'react'

const Persons = ({ persons, newFilter }) => {
    if (newFilter) {
        const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))

        return (
            <>
                {filteredPersons.map(person => <div key={person.name}>{`${person.name} ${person.number}`}</div>)}
            </>
        )
    } else {
        return(
        <>
            {persons.map(person => <div key={person.name}>{`${person.name} ${person.number}`}</div>)}
        </>
        )
    }
}

export default Persons;
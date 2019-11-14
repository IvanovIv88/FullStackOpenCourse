import React from 'react'

const Persons = ({ persons, newFilter, deleteName }) => {
    if (newFilter) {
        const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))

        return (
            <>
                {filteredPersons.map(person =>
                    <div key={person.name}>{`${person.name} ${person.number}`}
                        <button type="submit" onClick={() => deleteName(person.id, person.name)}>delete</button>
                    </div>)}
            </>
        )
    } else {
        return (
            <>
                {persons.map(person => <div key={person.name}>{`${person.name} ${person.number}`}
                    <button type="submit" onClick={() => deleteName(person.id, person.name)}>delete</button>
                </div>)}
            </>
        )
    }
}

export default Persons;
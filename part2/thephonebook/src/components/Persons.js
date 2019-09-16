import React from 'react'

const Persons = ({persons}) => {
    return (
        <>
            {persons.map(person => <div key={person.name}>{person.name}</div>)}
        </>
    )
}

export default Persons;
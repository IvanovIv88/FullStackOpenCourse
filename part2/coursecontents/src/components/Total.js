import React from 'react';

const Total = ({parts}) => {
    const totalExercises = parts.reduce((total, part) => {
        return total + part.exercises
    }, 0)

    return (
        <p><b>total of {totalExercises} exercises</b></p>
    )
  }

  export default Total;
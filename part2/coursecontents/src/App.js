import React from 'react'

import Course from './components/Course'

const App = ({courses}) => {
  return (
    <div>
      <Course key={courses[0].id} course={courses[0]} />
      <Course key={courses[1].id} course={courses[1]} />
    </div>
  )
}

export default App

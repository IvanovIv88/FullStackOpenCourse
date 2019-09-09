import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = () => {
  return (
    <h1>give feedback</h1>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Statistic = ({text, value}) => {
  return (
    <div>{`${text} ${value}`}</div>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = (((good * 1) + (neutral * 0) + (bad * -1)) / (good + neutral + bad));
  const positive = (good / all) * 100;

  return (
    <>
      <h1>statstics</h1>
      {(good || neutral || bad) ? (
        <>
          <Statistic text="good" value={good}/>
          <Statistic text="neutral" value={neutral}/>
          <Statistic text="bad" value={bad}/>
          <Statistic text="all" value={all}/>
          <Statistic text="average" value={average}/>
          <Statistic text="positive" value={positive}/>
        </>
      ) : <p>No feedback given</p>}
    </>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = (newValue) => () => {
    setGood(newValue)
  }

  const setToNeutral = (newValue) => () => {
    setNeutral(newValue)
  }

  const setToBad = (newValue) => () => {
    setBad(newValue)
  }

  return (
    <div>
      <Header />
      <Button handleClick={setToGood(good + 1)} text='good' />
      <Button handleClick={setToNeutral(neutral + 1)} text='neutral' />
      <Button handleClick={setToBad(bad + 1)} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)

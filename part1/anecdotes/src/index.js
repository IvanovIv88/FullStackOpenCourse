import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => {
    return (
        <button onClick={handleClick}>{text}</button>
    )
}

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [points, setPoints] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 })

    const setToSelected = (newValue) => () => {
        setSelected(newValue)
    }

    const setToPoints = (selected) => () => {
        const copyPoints = { ...points }
        copyPoints[selected] += 1
        setPoints(copyPoints)
    }

    const getRandomAnecdotes = () => () => {
        return Math.floor(Math.random() * (5 - 0 + 1)) + 0
    }

    return (
        <div>
            {props.anecdotes[selected]}
            <div>{`has ${points[selected]} votes`}</div>
            <div>
                <Button handleClick={setToPoints(selected)} text='vote' />
                <Button handleClick={setToSelected(getRandomAnecdotes())} text='next anecdote' />
            </div>
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)

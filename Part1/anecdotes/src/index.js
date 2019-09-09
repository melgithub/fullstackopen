import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// Our App Component
const App = (props) => {
    const [selected, setSelected] = useState(0)

    // Filling array with zeros
    const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

    // Button Methods
    // Randomize quote from array
    const randomizeQuote = () => {
        setSelected(Math.floor(Math.random() * ((anecdotes.length - 1) - 0 + 1)) + 0)
    }
    // Update setVotes array based on new votes
    const addVote = () => {
        const voteCopy = [...votes]
        voteCopy[selected] += 1
        setVotes(voteCopy)
    }

    // Find max vote index with for loop
    const getMaxVotes = (props) => {
        let maxSoFar = props[0]
        let index = 0
        for (let i = 1; i < props.length; i++) {
            if (props[i] > maxSoFar) {
                maxSoFar = props[i]
                index = i
            }
        }
        return index
    }

    return (
        <div>
            <h2>Random Anecdotes for Programmers - Final</h2>
            "{props.anecdotes[selected]}"<br></br>
            Votes so far: {votes[selected]}<br></br><br></br>
          
            <Button
                method={addVote}
                text="Vote!" />

            <Button
                method={randomizeQuote}
                text="Randomize!" />
            <h3>Most Popular Anecdote</h3>
            {props.anecdotes[getMaxVotes(votes)]}<br></br>
            Votes: {votes[getMaxVotes(votes)]}
            </div>
    )
}

// Other components
const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'It\'s OK to figure out murder mysteries, but you shouldn\'t need to figure out code. You should be able to read it.',
    'Program testing can be used to show the presence of bugs, but never to show their absence!',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const Button = (props) => {
    return (
        <button onClick={props.method}>
            {props.text}
        </button>
    )
}

// Rendering behavior
ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)
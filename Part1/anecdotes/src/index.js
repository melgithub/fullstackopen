import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
    const [selected, setSelected] = useState(0)

    const randomizeQuote = () => {
        setSelected(Math.floor(Math.random() * ((anecdotes.length-1) - 0 + 1)) + 0)
    }

    console.log(anecdotes.length)

    return (
        <div>
            <h2>Random Anecdotes for Programmers</h2>
            {props.anecdotes[selected]}<br></br>

            <Button
                method={randomizeQuote}
                text="Randomize!"/>
        </div>
    )
}

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

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)
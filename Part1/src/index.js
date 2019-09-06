import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [poor, setPoor] = useState(0)
    const [allFeedback, setAll] = useState([])

    // event handler methods
    const positiveFeedback = () => {
        console.log('Positive feedback sent.')
        setGood(good + 1)
        setAll(allFeedback.concat(1))
    }
    const neutralFeedback = () => {
        console.log('Neutral feedback sent.')
        setNeutral(neutral + 1)
        setAll(allFeedback.concat(0))
    }
    const negativeFeedback = () => {
        console.log('Negative feedback sent.')
        setPoor(poor + 1)
        setAll(allFeedback.concat(-1))
    }

    // app returns...
    return (
        <div>
            <h1>Unicafe: Step 2</h1>

            <h2>Provide feedback:</h2>
            <button onClick={positiveFeedback}>Good</button>
            <button onClick={neutralFeedback}>Neutral</button>
            <button onClick={negativeFeedback}>Poor</button>

            <h2>Statistics</h2>
            Good: {good}<br></br>
            Neutral: {neutral}<br></br>
            Poor: {poor}<br></br>
            All: {allFeedback.length}<br></br>
            Average: {(good * 1 + poor * -1) / allFeedback.length} < br ></br>
            Positive: {good / allFeedback.length * 100}%
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)
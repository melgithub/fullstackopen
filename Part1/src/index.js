import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [poor, setPoor] = useState(0)

    // event handler methods
    const positiveFeedback = () => {
        console.log('Positive feedback sent.')
        setGood(good + 1)
    }
    const neutralFeedback = () => {
        console.log('Neutral feedback sent.')
        setNeutral(neutral + 1)
    }
    const negativeFeedback = () => {
        console.log('Negative feedback sent.')
        setPoor(poor + 1)
    }

    // app returns...
    return (
        <div>
            <h1>Unicafe: Step 1</h1>

            <h2>Provide feedback:</h2>
            <button onClick={positiveFeedback}>Good</button>
            <button onClick={neutralFeedback}>Neutral</button>
            <button onClick={negativeFeedback}>Poor</button>

            <h2>Statistics</h2>
            Good: {good}<br></br>
            Neutral: {neutral}<br></br>
            Poor: {poor}
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)
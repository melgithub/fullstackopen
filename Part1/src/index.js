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
            <h1>Unicafe: Step 3</h1>
            <h2>Provide feedback:</h2>
            <button onClick={positiveFeedback}>Good</button>
            <button onClick={neutralFeedback}>Neutral</button>
            <button onClick={negativeFeedback}>Poor</button>
            <Statistics
                good={good}
                neutral={neutral}
                poor={poor}
                allFeedback={allFeedback} />
        </div>
        )
     }
        
const Statistics = (props) => {
    return (
        <div>
            <h2>Statistics</h2>
            Good: {props.good}<br></br>
            Neutral: {props.neutral}<br></br>
            Poor: {props.poor}<br></br>
            All: {props.allFeedback.length}<br></br>
            Average: {(props.good * 1 + props.poor * -1) / props.allFeedback.length} < br ></br>
            Positive: {props.good / props.allFeedback.length * 100}%
        </div>
        )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)
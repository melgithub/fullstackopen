import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    // Save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [poor, setPoor] = useState(0)

    const [allFeedback, setAll] = useState([])

    // Event handler methods
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

    return (
        <div>
            <h1>Unicafe: Step 6</h1>
            <h2>Provide feedback:</h2>

            <Button handleFeedback={() => positiveFeedback()} text="Good" /> 
            <Button handleFeedback={() => neutralFeedback()} text="Neutral"/> 
            <Button handleFeedback={() => negativeFeedback()} text="Poor"/>

            <Statistics text="Good:" value={good} allFeedback={allFeedback} />
            <Statistics text="Neutral:" value={neutral} allFeedback={allFeedback} />
            <Statistics text="Poor:" value={poor} allFeedback={allFeedback} />
            <Statistics text="All:" value={allFeedback.length} allFeedback={allFeedback} />
            <Statistics text="Avg:" value={(good * 1 + poor * -1) / allFeedback.length} allFeedback={allFeedback} />
            <Statistics text="% Positive:" value={good / allFeedback.length * 100} allFeedback={allFeedback} />

            <Statistics
                good={good}
                neutral={neutral}
                poor={poor}
                allFeedback={allFeedback} />
        </div>
        )
     }

// New button component 
const Button = (props) => {
    return (
        <button onClick={props.handleFeedback}>{props.text}</button>
    )
}

// New statistics component. Also implemented conditional rendering.
const Statistics = (props) => {

    if (props.text === "All:" && props.allFeedback.length === 0) {
        return (
            <div>
                <br></br>
                No feedback has been provided yet. Please send some!
            </div>
        )
    }
    else if (props.allFeedback.length === 0) {
        return (
            <div>
            </div>
        )
    }
    return (
        <div>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>{props.text}</td>
                            <td>{props.value}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)
import React from 'react'
import ReactDOM from 'react-dom'
import Course from './components/course'

const App = () => {

    const courses = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id: 1
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 4
            }
        ]
    }

    return (
        <div>
            <Course course={courses} />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
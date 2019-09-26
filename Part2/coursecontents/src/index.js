import React from 'react'
import ReactDOM from 'react-dom'
import Course from './components/course'

const App = () => {

    const courseData = [
            { 
            name: 'Half Stack application development',
            id: 1,
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
                        name: 'Test - adding another course!',
                        exercises: 30,
                        id: 4
                    }
                ]
            }
        ]

// The app component loads courses dynamically using the map function.
    return (
        <div>
            {courseData.map(specificCourse =>
                <Course key={specificCourse.id}
                    course={specificCourse} />)}
        </div>
    )
}

ReactDOM.render (<App />, document.getElementById('root'))

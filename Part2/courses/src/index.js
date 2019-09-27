import React from 'react'
import ReactDOM from 'react-dom'
import Course from './components/course'

const App = () =>
{
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
                }
            ]
        },
// Second course added
        {
        name: 'Node.js',
        id: 2,
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 2
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

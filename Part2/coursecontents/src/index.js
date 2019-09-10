import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const course = {
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
            <Course course={course} />
        </div>
    )
}

const Course = props => (
    <div>
        <Header course={props.course.name} />
        <Content parts={props.course.parts} />
    </div>
)
    //< Total parts = { props.course.parts } />
const Header = props =>
    <h1>{props.course}</h1>


//const Total = props => {
//    const total = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises

//    return <p>Total exercises: {total}</p>
//}

const Content = props => (
    <div>
        <Part part={props.parts[0]} />
        <Part part={props.parts[1]} />
        <Part part={props.parts[2]} />
    </div>
)

const Part = props =>
    <p>{props.part.name} {props.part.exercises}</p>

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
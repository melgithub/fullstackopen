import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {

// Variable declarations
    const course = 'Half Stack application development'
    const parts = [
        {
            name: 'Fundamentals of React',
            exercises: 10
        },
        {
            name: 'Using props to pass data',
            exercises: 7
        },
        {
            name: 'State of a component',
            exercises: 14
        }
    ]
 // What app returns
    return (
        <div>
            <Header course={course} />
            <Content parts={parts} />
            <Total parts={parts}/>
        </div>
    )
}

// Header component
const Header = (props) => {
    console.log(props)
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    )
}

// Component which populates course subtitle and # of exercises
const Content = (props) => {
    console.log(props.parts[1])

    return (
        <div>
            <Part1
                name={props.parts[0].name}
                exercises={props.parts[0].exercises} />
            <Part2
                name={props.parts[1].name}
                exercises={props.parts[1].exercises} />
            <Part3
                name={props.parts[2].name}
                exercises={props.parts[2].exercises} />
        </div>
    )
}

// Sum of all exercises component
const Total = (props) => {
    console.log(props)
    return ( 
        <div>
            <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
        </div>
    )
}

// Part 1 component
const Part1 = (props) => {
    console.log("Part 1 Component")
    return (
        <div>
            <p>
                {props.name} {props.exercises}
        </p>
    </div>
    )
}

// Part 2 component
const Part2 = (props) => {
    console.log("Part 2 Component")
    return (
        <div>
            <p>
                {props.name} {props.exercises}
            </p>
        </div>
    )
}

// Part 3 component
const Part3 = (props) => {
    console.log("Part 3 Component")
    return (
        <div>
            <p>
                {props.name} {props.exercises}
            </p>
        </div>
    )
}

// Call to render the App
ReactDOM.render(<App />, document.getElementById('root'))


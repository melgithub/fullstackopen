import React from 'react'
import ReactDOM from 'react-dom'


const App = () => {

    // Variable declarations
    const course = 'Half Stack application development'
    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
    }
    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
    }
    const part3 = {
        name: 'State of a component',
        exercises: 14
    }

    // What app returns
    return (
        <div>
            <Header
                course={course} />
            <Content
                part1={part1.name}
                exercises1={part1.exercises}
                part2={part2.name}
                exercises2={part2.exercises}
                part3={part3.name}
                exercises3={part3.exercises} />
            <Total
                exercises1={part1.exercises}
                exercises2={part2.exercises}
                exercises3={part3.exercises} />
        </div>
    )
}

// Header content
const Header = (props) => {
    console.log(props)
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    )
}

// Populates course part title and # of exercises
const Content = (props) => {
    console.log(props)
    return (
        <div>
            <Part1
                part1={props.part1}
                exercises1={props.exercises1} />
            <Part2
                part2={props.part2}
                exercises2={props.exercises2} />
            <Part3 
                part3={props.part3}
                exercises3={props.exercises3} />
        </div>
    )
}

// Sum of all exercises component
const Total = (props) => {
    console.log(props)
    return ( 
        <div>
            <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
        </div>
    )
}

// Part 1 component
const Part1 = (props) => {
    console.log("grabs Part1 component")
        return (
       <div>
        <p>
            {props.part1} {props.exercises1}
        </p>
    </div>
    )
}

// Part 2 component
const Part2 = (props) => {
    console.log("grabs Part2 component")
    return (
        <div>
            <p>
                {props.part2} {props.exercises2}
            </p>
        </div>
    )
}

// Part 3 component
const Part3 = (props) => {
    console.log("grabs Part3 component")
    return (
        <div>
            <p>
                {props.part3} {props.exercises3}
            </p>
        </div>
    )
}

// Call to render the App
ReactDOM.render(<App />, document.getElementById('root'))


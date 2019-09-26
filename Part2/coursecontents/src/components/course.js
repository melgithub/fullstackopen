import React from 'react'

// Component solely responsible for formatting a single course.
// Includes other components within it.

const Course = ({ course }) => {
    return (
        <div>
            <Header name={course.name} />
            <Content parts={course.parts} />
        </div>
    )
}

const Header = ({ name }) => <h1>{name}</h1>

const Content = ({ parts }) => {
    return (
        <div>
            {parts.map(specificPart => <Part
                key={specificPart.id}
                name={specificPart.name}
                exercises={specificPart.exercises} />)}
        </div>
    )
}

const Part = ({ name, exercises }) => {
    return (
        <div>
            <p>{name} - {exercises} </p>
        </div>
    )
}

export default Course
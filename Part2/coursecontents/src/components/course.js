import React from 'react'

// Component solely responsible for formatting a single course.
// Includes other components within it.

const Course = ({ course }) => {
    return (
        <div>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
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

const Total = ({ parts }) => {
    // Take source array (parts), iterates through each index producing a value which it saves in accumulator
    // 0 is initial value, then we add each of the others.
    return (
        <div>
            <p> <b>Total exercises:</b> {parts.reduce((accumulator, currentValue) =>
                {
                    console.log(accumulator, currentValue.exercises)
                    return accumulator + currentValue.exercises;
                }, 0)} </p>
        </div>
    )
}

export default Course
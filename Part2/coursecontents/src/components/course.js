import React from 'react'

const Course = props => (
    <div>
        <Header course={props.course.name} />
        <Content parts={props.course.parts} />
    </div>
)

const Part = props =>
    <p>{props.part.name} {props.part.exercises} ID:{props.part.id}</p>

const Header = props =>
    <h1>{props.course}</h1>


const Content = props => (
    <div>
        <Part part={props.parts[0]} />
        <Part part={props.parts[1]} />
        <Part part={props.parts[2]} />
    </div>
)

//const Total = props => {
//    const total = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises

//    return <p>Total exercises: {total}</p>
//}

export default Course
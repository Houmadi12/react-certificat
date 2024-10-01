import React from "react"

const Header = (props) => {
  console.log("Header props",props)
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <p> {props.part} {props.exercice} </p>
  )
}

const Content = () => {
  return (
    <div>
      <Part part = {'Fundamentals of react'} exercices = {10} />
      <Part part = {'Using props to pass data'} exercices = {7} />
      <Part part = {'State of a component'} exercices = {14} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercices {props.exercice}</p>
  )
}

// const App = () => {
//   return(
//     <div>
//       <Header course = {'Half Stack application development'} />
//       <Content />
//       <Total exercice = {10+7+14} />
//     </div>
//   )
// }

const App = () => {
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

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1.name} {part1.exercises}
      </p>
      <p>
        {part2.name} {part2.exercises}
      </p>
      <p>
        {part3.name} {part3.exercises}
      </p>
    </div>
  )
}

export default App;

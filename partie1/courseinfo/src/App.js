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

const Content = (props) => {
  return (
    <div>
      <Part part = {props.name1} exercice = {props.exercices1} />
      <Part part = {props.name2} exercice = {props.exercices2} />
      <Part part = {props.name3} exercice = {props.exercices3} />
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
      <Header course = {course} />
      <Content 
        name1={part1.name} exercices1={part1.exercises} 
        name2={part2.name} exercices2={part2.exercises}
        name3={part3.name} exercices3={part3.exercises}
      />
      <Total exercice = {part1.exercises+part2.exercises+part3.exercises} />
    </div>
  )
}

export default App;

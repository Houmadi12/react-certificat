import React from "react"

const Header = (props) => {
 
  return (
    <div>
      <h1>{props.cours.name}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <p> {props.part} {props.exercice} </p>
  )
}

const Content = (props) => {
  // console.log(props)
  const cours = props.cours;
  const parts = cours.parts;
  console.log(parts);
  return (
    <div>
      <Part part = {parts[0].name} exercice = {parts[0].exercises} />
      <Part part = {parts[1].name} exercice = {parts[1].exercises} />
      <Part part = {parts[2].name} exercice = {parts[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  const exercice = props.cours.parts.map(val => val.exercises);
  const total = exercice.reduce((acc, val)=>acc+val,0);
  
  return (
    <p>Number of exercices {total}</p>
  )
}

const App = () => {
  const cours = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header cours = {cours} />
      <Content cours = {cours}/>
      <Total cours = {cours} /> 
    </div>
  )
}

export default App;

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
  console.log(props)
  const info = props.info;
  console.log(info);
  return (
    <div>
      <Part part = {info[0].name} exercice = {info[0].exercices} />
      <Part part = {info[1].name} exercice = {props.info[1].exercices} />
      <Part part = {props.info[2].name} exercice = {props.info[2].exercices} />
    </div>
  )
}

const Total = (props) => {
  // console.log(props)
  const exercice = props.exercice.map(exe => exe.exercices);
  const total = exercice.reduce((acc, val)=>acc+val,0);
  
  return (
    <p>Number of exercices {total}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'

  const parts = [
    {
      name: 'Fundamentals of React',
      exercices: 10
    },
    {
      name: 'Using props to pass data',
      exercices: 7
    },
    {
      name: 'State of a component',
      exercices: 14
    }
  ]


  return (
    <div>
      <Header course = {course} />
      <Content info = {parts}/>
      <Total exercice = {parts} />
    </div>
  )
}

export default App;

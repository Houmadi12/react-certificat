import React from "react"

const Header = (props) => {
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

const App = () => {
  return(
    <div>
      <Header course = {'Half Stack application development'} />
      <Content />
      <Total exercice = {10+7+14} />
    </div>
  )
}

export default App;

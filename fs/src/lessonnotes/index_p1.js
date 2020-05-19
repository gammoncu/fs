import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course ={
  name: 'Half Stack application development',
  parts : [
  {
    name: 'Fundamentals of React',
    exercises: 10
  }
  , {
    name: 'Using props to pass data',
    exercises: 7
  }
  , {
    name: 'State of a component',
    exercises: 14
  }
]

}

return (
    <div>
      <h1>{course.name}</h1>
        {
        course.parts.map(value => {
                  return (
                     <p>{value.name} {value.exercises}</p>
                  )
                })
        }
      <p>Number of exercises {course.parts.map(v => v.exercises).reduce((a,b) => a+b,0)}</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

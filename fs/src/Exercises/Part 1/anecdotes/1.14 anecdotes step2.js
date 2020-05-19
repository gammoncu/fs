import React, { useState } from 'react'
import ReactDOM from 'react-dom'

//1.14 anecdotes step2
// display anecdote with max votes
const Button = (props) => {
    return(
      <button onClick={() => props.fn(Math.floor(Math.random() * Math.floor(6)))}>
      {props.txt}
      </button>
    )
  }
  
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  
  const App = (props) => {
    const [selected, setSelected] = useState(0)
    //Setting state to a new array 
    const [points,setPoints] = useState(new Array(6).fill(0))
    
    const voteClick = () => {
      // updating array by copying, using spread operator
      const copy = [...points]
      copy[selected] += 1 //increment selected
      setPoints(copy) //update points
    }
  
    return (
      <div>
        <div>
          <h1>Anecdote of the day</h1>
          No {selected+1} - {anecdotes[selected]}
        </div>
        <div>
          {points[selected]} votes 
        </div>  
        <div>
        <button onClick={voteClick} >
        vote
        </button>
        <Button txt = "next anecdote" fn = {setSelected} />
        </div>
        <div>
        <h1>Anecdote with most votes</h1>
          {anecdotes[points.indexOf(Math.max(...points))]}
        </div>
      </div>
    )
  }
  
  
ReactDOM.render(
    <App />, 
    document.getElementById('root')
  )

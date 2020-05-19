import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// 1.8: unicafe step3
// displaying the statistics is extracted into its own Statistics component

const Statistics = (props) => {
  
    const l = [props.g, props.n, props.b]
    const all = l.reduce((a,b)=> a+b)
    const avg = l.reduce((a,b)=> a+b)/l.length
    const pos = l.reduce((a,b)=> a+b) === 0 ? 0 : props.g/l.reduce((a,b)=> a+b)*100
    
    return (
      <div>
        <h1>Statistics</h1>
          <p>good : {props.g} </p>
          <p>neutral: {props.n} </p>
          <p>bad : {props.b} </p>
          <p>all : {all} </p>
          <p>avg : {Math.round(avg)} </p>
          <p>pos : {pos.toFixed(2)} % </p>
      </div>
    )
  }
  
  const App = (props) => {
    // save clicks of each button to own state
    const [g, setGood] = useState(0)
    const [n, setNeutral] = useState(0)
    const [b, setBad] = useState(0)
    
    return (
      <div>
        <div>
          <button onClick={() => setGood(g + 1)}>
            good
          </button>
          <button onClick={() => setNeutral(n + 1)}>
            neutral
          </button>
          <button onClick={() => setBad(b + 1)}>
            bad
          </button>
      </div>
          <Statistics 
            g = {g} 
            n = {n} 
            b = {b} 
          />
    </div>
    )
  }
  
ReactDOM.render(
    <App />, 
    document.getElementById('root')
  )

import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// 1.11 unicafe step6
// Display the statistics in an HTML table

const Statistics = (props) => {
  
    const l = [props.g, props.n, props.b]
    const all = l.reduce((a,b)=> a+b)
    const avg = l.reduce((a,b)=> a+b)/l.length
    const pos = l.reduce((a,b)=> a+b) === 0 ? 0 : props.g/l.reduce((a,b)=> a+b)*100
    
    if (all === 0) {
      return (
        <div>
          no feetback is given
        </div>
      )
    }
    return (
      <div>
        <h1>Statistics</h1>
          <table>
          <tr><th>good</th><th>{props.g}</th></tr>
          <tr><th>neutral</th><th> {props.n} </th></tr>
          <tr><th>bad </th><th> {props.b} </th></tr>
          <tr><th>all </th><th> {all} </th></tr>
          <tr><th>avg </th><th> {Math.round(avg)} </th></tr>
          <tr><th>pos </th><th> {pos.toFixed(2)} % </th></tr>
          </table>
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
        <h1>feedbacks</h1>
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

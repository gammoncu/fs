import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// 1.7: unicafe step2 v1
//  shows more statistics about the gathered feedback

const App = () => {
    // save clicks of each button to own state
    const [g, setGood] = useState(0)
    const [n, setNeutral] = useState(0)
    const [b, setBad] = useState(0)
    //list object
    const l = [g, n, b]
  
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
      <div>
        <h1>Statistics</h1>
          <p>good : {g} </p>
          <p>neutral: {n} </p>
          <p>bad : {b} </p>
          <p>all : {l.reduce((a,b)=> a+b)} </p>
          <p>avg : {l.reduce((a,b)=> a+b)/l.length} </p>
          <p>pos : {g/l.reduce((a,b)=> a+b)*100} % </p>
      </div>
    </div>
    )
  }
  
  */
  
  
  /* 
  
  // 1.7: unicafe step2 v2
  //  shows more statistics about the gathered feedback
  
  const App = () => {
    // save clicks of each button to own state
    const [g, setGood] = useState(0)
    const [n, setNeutral] = useState(0)
    const [b, setBad] = useState(0)
    //list object
    const l = [g, n, b]
    const all = l.reduce((a,b)=> a+b)
    const avg = l.reduce((a,b)=> a+b)/l.length
    const pos = l.reduce((a,b)=> a+b)==0 ? 0 : g/l.reduce((a,b)=> a+b)*100
  
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
      <div>
        <h1>Statistics</h1>
          <p>good : {g} </p>
          <p>neutral: {n} </p>
          <p>bad : {b} </p>
          <p>all : {all} </p>
          <p>avg : {Math.round(avg)} </p>
          <p>pos : {pos.toFixed(2)} % </p>
      </div>
    </div>
    )
  }
  
*/  
  
ReactDOM.render(
    <App />, 
    document.getElementById('root')
  )

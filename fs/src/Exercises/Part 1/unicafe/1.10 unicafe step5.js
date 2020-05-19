import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// 1.10*: unicafe step5
// Button and Statistic component

const Statistic = (props) => {
    return(
      <p> {props.text} : {props.val} </p>
    )
  }
  
  const Button = (props) => {
    return(
      <button onClick={() => props.setF(props.f + 1)}>
            {props.text}
          </button>
    )
  }
  
  const App = (props) => {
    // save clicks of each button to own state
    const [g, setGood] = useState(0)
    const [n, setNeutral] = useState(0)
    const [b, setBad] = useState(0)
    
    const all = [g, n, b].reduce((a,b)=> a+b)
    const avg = [g, n, b].reduce((a,b)=> a+b)/[g, n, b].length
    const pos = [g, n, b].reduce((a,b)=> a+b) === 0 ? 0 : g/[g, n, b].reduce((a,b)=> a+b)*100
    
    return (
      <div>
        <h1>feedbacks</h1>
        <div>
          <Button  text= "good"  f={g} setF = {setGood} />
          <Button  text= "neutral"  f={n} setF = {setNeutral} />
          <Button  text= "bad"  f={b} setF = {setBad} />
      </div>
      <div>    
          <Statistic  text = "good" val = {g} />
          <Statistic  text = "neutral" val = {n} />
          <Statistic  text = "bad" val = {b} />
          <Statistic  text = "all" val = {all} />
          <Statistic  text = "avg" val = {avg.toFixed(2)} />
          <Statistic  text = "pos" val = {pos.toFixed(2)} />
      </div>    
    </div>
    )
  }
  
ReactDOM.render(
    <App />, 
    document.getElementById('root')
  )

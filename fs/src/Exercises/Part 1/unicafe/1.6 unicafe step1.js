import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// 1.6 unicafe step 1

const App = () => {
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
      <div>
        <h1>Statistics</h1>
          <p>good : {g} </p>
          <p>neutral: {n} </p>
          <p>bad : {b} </p>
      </div>
    </div>
    )
  }

  
ReactDOM.render(
    <App />, 
    document.getElementById('root')
  )

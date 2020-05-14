import React, { useState } from 'react'
import ReactDOM from 'react-dom'

/*
//<- Complex State example
const App = (props) => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  return (
    <div>
      <div>
        {left}
        <button onClick={() => setLeft(left + 1)}>
          left
        </button>
        <button onClick={() => setRight(right + 1)}>
          right
        </button>
        {right}
      </div>
    </div>
  )
}
//->
*/

/*
// <-Complex state example handling arrays
const History = (props) => {
    if (props.allClicks.length === 0) {
      return (
        <div>
          the app is used by pressing the buttons
        </div>
      )
    }
  
    return (
      <div>
        button press history: {props.allClicks.join(' ')}
      </div>
    )
  }

//debugger  
const Button = ({ onClick, text }) => (
    <button onClick = { onClick }> { text } </button>
) 

const App = (props) => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState([])
  
    const handleLeftClick = () => {
      setAll(allClicks.concat('L'))
      setLeft(left + 1)
    }
  
    const handleRightClick = () => {
      setAll(allClicks.concat('R'))
      setRight(right + 1)
    }

    return (
      <div>
        <div>
          {left}
          <Button onClick={handleLeftClick} text ='left' />
          <Button onClick={handleRightClick} text ='right' />
          {right}
          <History allClicks= {allClicks} />
        </div>
      </div>
    )
  }

//->
*/ 

//Define event handlers that set the state of the component 
//to a given value.
const App = (props) => {
  const [value, setValue] = useState(10)
  
  const setToValue = (newValue) => () => {
    setValue(newValue)
  }
  
  return (
    <div>
      {value}
      <button onClick={setToValue(1000)}>thousand</button>
      <button onClick={setToValue(0)}>reset</button>
      <button onClick={setToValue(value + 1)}>increment</button>
    </div>
  )
}



ReactDOM.render(
    <App />, 
    document.getElementById('root')
  )
  
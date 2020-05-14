import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App1 = (props) => {
  const [ counter, setCounter ] = useState(0)

  setTimeout(
    () => setCounter(counter + 1),
    1000
  )

  return (
    <div>{counter}</div>
  )
}

const Display = (props) => {
    return (
      <div>{props.counter}</div>
    )
  }

const Button = (props) => {
    return (
      <button onClick={props.handleClick}>
        {props.text}
      </button>
    )
  }

const App = (props) => {
    const [ counter, setCounter ] = useState(0)
  
    const increaseByOne = () => setCounter(counter + 1)
    const decreaseByOne = () => setCounter(counter - 1)
    const setToZero = () => setCounter(0)
  
    return (
      <div>
        <Display counter={counter}/>
        <Button
          handleClick={increaseByOne}
          text='plus'
        />
        <Button
          handleClick={setToZero}
          text='zero'
        />     
        <Button
          handleClick={decreaseByOne}
          text='minus'
        />           
      </div>
    )
  }


ReactDOM.render(
  <App />, 
  document.getElementById('root')
)



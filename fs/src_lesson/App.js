import React from 'react'
//import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';

const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

const footer = () => {
  return (
    <div>
      greeting app created by <a href="https://github.com/mluukkai">mluukkai</a>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <footer />
    </>
  )
}

// function App() {
//   const now = new Date()
//   const a = 10
//   const b = 20
//   const br = <br></br>
//   const ielement = <img src={logo} className="App-logo" alt="logo" ></img>;
  
//   return React.createElement(
//     'div',
//     {className:'App'},
//     React.createElement(
//       'header',
//       {className:'App-header'},
//       ielement, 
//         React.createElement(
//       'p', null, 'Hello world!',br , 'It is ', now.toString()
//         ),
//         br,
//         React.createElement(
//           'p', null, a, ' plus ', b, ' is ', a + b
//         ),
//     ),
//   );
// }

// function App() {
//   const now = new Date()
//   const a = 10
//   const b = 20
//  
//    return(
//   <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <div>
//         <p>
//           Hello world! 
//         </p><br></br>
//         <p>
//           It is {now.toString()}
//         </p><br></br>
//         <p>
//           {a} plus {b} is {a + b}
//         </p>
//       </div>
//     </header>
//   </div>
// );
// }

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css';
function App() {
 /* return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
   
  );*/
  let firstName= "will";
  let lastName ="Smith";
  return(
    <div>
      <img src="/profile.png" className= "my-profile"/>
      <p>{firstName} {lastName}</p>
      
    </div>);
  
    
}

export default App;

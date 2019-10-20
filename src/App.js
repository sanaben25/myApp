import React from 'react';
import logo from './logo.svg';
import imageSrc from './imageInSrc.jpg';
import './App.css';
import './style.css';

import MyComponent from './MyComponent';
function App() {

return (
  <React.Fragment>
    <div style={{border:`solid 1px black`,  maxidth:"100vw"}}>

        <h1 className="title red">My title</h1>

        <br/>

        <img src={imageSrc}/>

        <br/>

        <img src="/imageInPublic.png" />


      </div>

      <div className="myApp">
        <MyComponent />

      </div>
  </React.Fragment>
);



 {/* return (
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
  /*let firstName= "will";
  let lastName ="Smith";
  return(
    <div>
      <img src="/profile.png" className= "my-profile"/>
      <p>{firstName} {lastName}</p>
      
    </div>);
    */
 }
    
}

export default App;

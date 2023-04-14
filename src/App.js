import React, {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  let [BackendInfo, backendInfoSet] = useState([])

  useEffect(() => {
    fetch('backend')
      .then(res => res.json())
      .then(BackendInfo)
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Here's the backend info: {BackendInfo}
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
  );
}

export default App;

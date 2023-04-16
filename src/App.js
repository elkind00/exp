import React, {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  let [BackendInfo, backendInfoSet] = useState([])

/* original version
  useEffect(() => {
    fetch('backend')
      .then(res => res.json())
      .then(backendInfoSet)
  }, [])
*/

  // Need to modify this to check the returned status and print it out, see
  // this webpage: https://linkpe.in/story/react-fetch-data
  let errorText = 'no error: '
  useEffect(() => {
    fetch('backend')
      .then(res => {
        if (res.status >= 400) {
          errorText = "there's an error: "
        }
        errorText += JSON.stringify(res)
        return res.json()
      })
      .then(backendInfoSet)
  }, [])
  
  const str = 'JSON Stringified version: ' + JSON.stringify(BackendInfo)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Here's the backend info: {BackendInfo['success']}, {BackendInfo['greeting']}
        </p>
        <p>
          {str}
        </p>
        <p>
          Error text: {errorText}
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

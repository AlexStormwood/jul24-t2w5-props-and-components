import { useState } from 'react'

import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'


// import './App.css';
import '../styles/App.css';
import LogosComponent from '../components/Logos';
import LogoDisplayComponent from '../components/LogoDisplayComponent';

function App() {
  const [count, setCount] = useState(0)

  let darkModeStyleObject = {
    backgroundColor: "black",
    color: "white"
  }

  let lightModeStyleObject = {
    backgroundColor: "white",
    color: "black"
  }

  let userTheme = "dark";

  return (
    <>
      <LogosComponent />
      <LogoDisplayComponent url="https://vite.dev" logo={viteLogo} altText="Vite logo"  />
      <LogoDisplayComponent url="https://react.dev" logo={reactLogo} altText="React logo"  />

      <h1 
        className={userTheme == "dark" ? "darkHeading" : "lightHeading"}
        style={userTheme == "dark" ? darkModeStyleObject : lightModeStyleObject}
      >
        Vite + React
      </h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

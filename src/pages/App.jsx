import { useState } from 'react'

// import './App.css';
import '../styles/App.css';
import LogosComponent from '../components/Logos';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LogosComponent />
      <h1>Vite + React</h1>
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

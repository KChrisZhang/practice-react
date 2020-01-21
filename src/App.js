import React from 'react'
// import logo from './logo.svg'
import './App.css'

import Header from './components/Header'
import Button from './components/Button'

function App() {
  const count = sessionStorage.getItem('count') || 0
  sessionStorage.setItem('count', Number(count) + 1)
  console.log('[app]', sessionStorage.getItem('count'))

  return (
    <div className="App">
      <Header></Header>
      {/* <header className="App-header">
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
      </header> */}
      <Button></Button>
    </div>
  )
}

export default App

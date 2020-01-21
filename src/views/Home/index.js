import React from 'react'
import logo from '../../logo.svg'
import './index.scss'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="Home-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link to="/user">User</Link>
      </header>
    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../logo.svg'
import './index.scss'

export default function Example() {
  return (
    <div className="Example">
      <header className="Example-header">
        <img src={logo} className="Example-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="Example-link"
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

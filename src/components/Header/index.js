import React from 'react'
import { Link } from 'react-router-dom'

import './index.scss'

export default function Header() {
  return (
    <header className="header">
      <Link className="header-link" to="/">
        Home
      </Link>
      <Link className="header-link" to="/user">
        User
      </Link>
    </header>
  )
}

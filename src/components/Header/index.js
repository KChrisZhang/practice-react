import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './index.scss'

export default function Header(props) {
  const location = useLocation()
  const pathname = location.pathname

  return (
    <header className="header">
      <Link className={`header-link ${pathname === '/' ? 'header-link-active' : ''}`} to="/">
        Home
      </Link>
      <Link
        className={`header-link ${pathname === '/user' ? 'header-link-active' : ''}`}
        to="/user"
      >
        User
      </Link>
      <Link
        className={`header-link ${pathname === '/login' ? 'header-link-active' : ''}`}
        to="/login"
      >
        Login
      </Link>
    </header>
  )
}

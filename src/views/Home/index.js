import React from 'react'
import { useLocation } from 'react-router-dom'
import './index.scss'

export default function Home(props) {
  let location = useLocation()
  console.log(location.pathname, 'home')

  return (
    <div className="Home">
      <h3>{props['title']}</h3>
    </div>
  )
}

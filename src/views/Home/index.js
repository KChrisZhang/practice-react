import React from 'react'
import './index.scss'

export default function Home(props) {
  return (
    <div className="Home">
      <h3>{props['title']}</h3>
    </div>
  )
}

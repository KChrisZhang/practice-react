import React from 'react'
import { useLocation } from 'react-router-dom'
import './index.scss'

import Clock from '../../components/Clock'
import Button from '../../components/Button'
import BarChart from '../../components/BarChart'

export default function Home(props) {
  let location = useLocation()
  console.log(location.pathname, 'home')

  return (
    <div className="Home">
      <Clock></Clock>
      <h3>{props['title']}</h3>
      <Button></Button>

      <BarChart></BarChart>
    </div>
  )
}

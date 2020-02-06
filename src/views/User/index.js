import React from 'react'
import { useLocation } from 'react-router-dom'
import './index.scss'

import MapChart from '../../components/MapChart'

export default function User(props) {
  let location = useLocation()
  console.log(location.pathname, 'user')

  return (
    <div className="User">
      <h3>Hello {props['title']}!</h3>
      <MapChart></MapChart>
    </div>
  )
}

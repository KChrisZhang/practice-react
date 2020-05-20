import React from 'react'
import { useLocation, Link, Route } from 'react-router-dom'
import './index.scss'
import About from './About'
import Setting from './Setting'

export default function User(props) {
  let location = useLocation()
  console.log(location.pathname, 'user')

  return (
    <div className="User">
      <h3>Hello {props['title']}!</h3>

      <ul>
        <li>
          <Link to="/user/setting">设置</Link>
        </li>
        <li>
          <Link to="/user/about">关于</Link>
        </li>
      </ul>

      <Route path="/user/setting" component={Setting}></Route>
      <Route path="/user/about" component={About}></Route>
    </div>
  )
}

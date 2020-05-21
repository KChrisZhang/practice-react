import React from 'react'
import { Link, Route } from 'react-router-dom'
import './index.scss'
import About from './About'
import Setting from './Setting'

export default function User(props) {
  return (
    <div className="User">
      <h3>{props['title']}</h3>
      <p>Hello!</p>

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

import React from 'react'
import { Link } from 'react-router-dom'

export default class List extends React.Component {
  render() {
    return (
      <div>
        <h2>列表页</h2>
        <ul>
          <li>
            <Link to="/detail/134">商品134</Link>
          </li>
          <li>
            <Link to="/detail/135">商品135</Link>
          </li>
          <li>
            <Link to="/detail/136">商品136</Link>
          </li>
        </ul>
      </div>
    )
  }
}

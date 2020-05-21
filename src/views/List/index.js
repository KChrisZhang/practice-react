import React from 'react'
import { Link } from 'react-router-dom'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory({
  forceRefresh: true,
})

export default class List extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
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
        <button onClick={() => history.push('/detail/100')}>第100号商品</button>
      </div>
    )
  }
}

import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './views/Home'
import User from './views/User'

function App() {
  const count = sessionStorage.getItem('count') || 0
  sessionStorage.setItem('count', Number(count) + 1)
  console.log('[app]', sessionStorage.getItem('count'))

  return (
    <Router>
      <div>
        {/* <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/user">User</Link>
          </li>
        </ul> */}

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/user">
            <User></User>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App

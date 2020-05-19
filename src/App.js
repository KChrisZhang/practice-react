import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

import Home from './views/Home'
import User from './views/User'
import Login from './views/Login'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home title="首页123"></Home>
          </Route>
          <Route path="/user">
            <User title="用户456"></User>
          </Route>
          <Route path="/login">
            <Login title="登录"></Login>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App

import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './views/Home'
import User from './views/User'
import './App.css'

function App() {
  const count = sessionStorage.getItem('count') || 0
  sessionStorage.setItem('count', Number(count) + 1)
  console.log('[app]', sessionStorage.getItem('count'))

  return (
    <Router>
      <div>
        <Header></Header>

        <Switch>
          <Route exact path="/">
            <Home title="首页123"></Home>
          </Route>
          <Route path="/user">
            <User title="用户456"></User>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App

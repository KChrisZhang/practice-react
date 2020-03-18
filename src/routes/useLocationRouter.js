import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, useLocation } from 'react-router-dom'

function usePageViews() {
  let location = useLocation()
  React.useEffect(
    ga => {
      ga.send(['pageview', location.pathname])
    },
    [location]
  )
}

function App() {
  usePageViews()
  return <Switch>...</Switch>
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)

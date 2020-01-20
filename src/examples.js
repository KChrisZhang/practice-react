import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from 'react-router-do,'

export default function authExample() {
  return (
    <Router>
      <div>
        <AuthButton></AuthButton>
        <ul>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/public">
            <PublicPage></PublicPage>
          </Route>
          <Route path="/login">
            <LoginPage></LoginPage>
          </Route>
          <PrivateRoute path="/protected">
            <ProtectedPaage></ProtectedPaage>
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  )
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true
    setTimeout(cb, 100)
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false
    setTimeout(cb, 100)
  },
}

function AuthButton() {
  let history = useHistory()
  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome!{' '}
      <button
        onClick={() => {
          fakeAuth.signout(() => {
            history.push('/')
          })
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )
}

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          ></Redirect>
        )
      }
    />
  )
}

function PublicPage() {
  return <h3>Public Page</h3>
}
function ProtectedPaage() {
  return <h3>Protected Page</h3>
}

function LoginPage() {
  let history = useHistory()
  let location = useLocation()
  let from = location.state || { from: { pathname: '/' } }
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from)
    })
  }

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}.</p>
      <button onClick={login}>Log in</button>
    </div>
  )
}

import React from 'react'
import { Switch, Route, useParams } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/about">
          <About />
        </Route>

        <Route path="/contact/:id">
          <Contact />
        </Route>
        <Route path="/contact">
          <AllContact />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  )
}

function About() {
  return <h2>About</h2>
}

function Contact() {
  const { id } = useParams()
  return <h2>Contact id: {id}.</h2>
}

function AllContact() {
  return <h2>AllContact</h2>
}

function Home() {
  return <h2>Home</h2>
}

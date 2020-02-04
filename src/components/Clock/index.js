import React from 'react'
import './index.scss'

export default class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date(), post: [] }
  }
  componentDidMount() {
    const self = this
    this.timerId = setInterval(() => {
      self.tick()
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timerId)
    this.timerId = null
  }
  tick() {
    this.setState({
      date: new Date(),
    })
  }
  render() {
    return (
      <div className="Clock">
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}

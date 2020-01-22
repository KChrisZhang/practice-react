import React from 'react'
import './index.scss'

export default class Button extends React.Component {
  constructor(props) {
    super(props)
    this.state = { status: false }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    const val = !this.state.status
    this.setState({
      status: val,
    })
  }
  render() {
    return (
      <button className="button" onClick={this.handleClick}>
        {this.state.status ? 'ON' : 'OFF'}
      </button>
    )
  }
}

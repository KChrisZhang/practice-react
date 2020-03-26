import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { number: 0 }
    this.incrementIfOdd = this.incrementIfOdd.bind(this)
  }
  incrementIfOdd() {
    this.setState({ number: this.props.value })
    console.log('[incrementIfOdd]', this.state.number)

    if (this.props.value % 2 !== 0) {
      this.props.onIncrement()
    }
  }
  incrementAsync() {
    setTimeout(this.props.onIncrement(), 1000)
  }
  render() {
    const { value, onIncrement, onDecrement } = this.props

    return (
      <p>
        Clicked: {value} times.
        <br />
        <button onClick={onIncrement}>+</button>
        <br />
        <button onClick={onDecrement}>-</button>
        <br />
        <button onClick={this.incrementIfOdd}>Increment if odd</button>
        <br />
        {/* <button onClick={this.incrementAsync}>Increment async</button> */}
      </p>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
}

export default Counter

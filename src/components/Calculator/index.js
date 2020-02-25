import React from 'react'
import BoilingVerdict from '../BoilingVerdict'

export default class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = { temperature: '' }

    this.handlaChange = this.handlaChange.bind(this)
  }

  handlaChange(event) {
    this.setState({
      temperature: event.target.value,
    })
  }

  render() {
    const temperature = this.state.temperature
    return (
      <fieldset>
        <legend>Enter temperature in Celsius:</legend>
        <input type="text" value={temperature} onChange={this.handlaChange} />
        <BoilingVerdict celsius={parseFloat(temperature)}></BoilingVerdict>
      </fieldset>
    )
  }
}

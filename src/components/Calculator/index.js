import React from 'react'
import BoilingVerdict from '../BoilingVerdict'
import TemperatureInput from '../TemperatureInput'

export default class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = { temperature: '', scale: 'c' }

    this.handlaChange = this.handlaChange.bind(this)
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
  }

  toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9
  }
  toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32
  }
  tryConvert(temperature, convert) {
    const input = parseFloat(temperature)
    if (Number.isNaN(input)) return ''
    const output = convert(input)
    const rounded = Math.round(output * 1000) / 1000
    return rounded.toString()
  }

  handleCelsiusChange(temperature) {
    this.setState({ scale: 'c', temperature })
  }
  handleFahrenheitChange(temperature) {
    this.setState({ scale: 'f', temperature })
  }
  handlaChange(event) {
    this.setState({
      temperature: event.target.value,
    })
  }

  render() {
    const scale = this.state.scale
    const temperature = this.state.temperature
    const celsius = scale === 'f' ? this.tryConvert(temperature, this.toFahrenheit) : temperature
    const fahrenheit = scale === 'c' ? this.tryConvert(temperature, this.toCelsius) : temperature

    /**
     * It renders an <input> that lets you enter the temperature,
     * and keep its value in the this.state.temperature.
     * Additionally, it renders <BoilingVerdict> for the current input value.
     */
    return (
      /*
      <fieldset>
        <legend>Enter temperature in Celsius:</legend>
        <input type="text" value={temperature} onChange={this.handlaChange} />
        <BoilingVerdict celsius={parseFloat(temperature)}></BoilingVerdict>
      </fieldset>
      */

      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        ></TemperatureInput>
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        ></TemperatureInput>
        <BoilingVerdict celsius={parseFloat(celsius)}></BoilingVerdict>
      </div>
    )
  }
}

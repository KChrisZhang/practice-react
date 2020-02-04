import React from 'react'
import './index.scss'

export default class WarningMessage extends React.Component {
  render() {
    if (!this.props.message) {
      return null
    }
    return <div className="WarningMessage">{this.props.message}</div>
  }
}

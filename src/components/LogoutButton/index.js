import React from 'react'

export default class LogoutButton extends React.Component {
  render() {
    return <button onClick={this.props.onClick}>退出登录</button>
  }
}

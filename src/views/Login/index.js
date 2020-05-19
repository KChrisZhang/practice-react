import React from 'react'
import './index.scss'

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isLogin: false }
    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
  }
  handleLoginClick() {
    this.setState({
      isLogin: true,
    })
  }
  handleLogoutClick() {
    this.setState({
      isLogin: false,
    })
  }
  render() {
    return (
      <div className="Login">
        <button>Login</button>
      </div>
    )
  }
}

import React from 'react'
import './index.scss'

import LoginButton from '../../components/LoginButton'
import LogoutButton from '../../components/LogoutButton'
import WarningMessage from '../../components/WarningMessage'

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
    let button
    if (this.state.isLogin) {
      button = <LogoutButton onClick={this.handleLogoutClick}></LogoutButton>
    } else {
      button = <LoginButton onClick={this.handleLoginClick}></LoginButton>
    }

    return (
      <div className="Login">
        {button}
        <WarningMessage message={this.state.isLogin ? '登录成功' : ''}></WarningMessage>
      </div>
    )
  }
}

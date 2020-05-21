import React from 'react'
import './index.scss'
import { Button } from 'antd'

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isLogin: 'false' }
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
    console.log(this.state.isLogin)
    return (
      <div className="Login">
        <h3>登录页</h3>
        <Button className="Login-button" type="primary">
          登录
        </Button>
        <p>{this.state.isLogin}</p>
      </div>
    )
  }
}

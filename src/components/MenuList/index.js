import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'

const { SubMenu } = Menu

export default class MenuList extends React.Component {
  handleClick(e) {
    console.log(`${e.key} Menu[click]`)
  }
  render() {
    return (
      <Menu
        onClick={this.handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <span>菜单</span>
            </span>
          }
        >
          <Menu.Item key="首页">
            <Link to="/">首页</Link>
          </Menu.Item>
          <Menu.Item key="用户">
            <Link to="/user">用户</Link>
          </Menu.Item>
          <Menu.Item key="登录">
            <Link to="/login">登录</Link>
          </Menu.Item>
          <Menu.Item key="计数器">
            <Link to="/counter">计数器</Link>
          </Menu.Item>
          <Menu.Item key="todoApp">
            <Link to="/todo">todoApp</Link>
          </Menu.Item>
          <Menu.Item key="列表">
            <Link to="/list">列表</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    )
  }
}

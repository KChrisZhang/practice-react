import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'

const { SubMenu } = Menu

export default class MenuList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        { name: 'HOME', path: '/' },
        { name: 'USER', path: '/user' },
        { name: 'LOGIN', path: '/login' },
        { name: 'COUNTER', path: '/counter' },
        { name: 'TODOAPP', path: '/todo' },
        { name: 'LIST', path: '/list' },
      ],
    }
  }
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
        <SubMenu key="sub1" title={<span>MENU</span>}>
          {this.state.list.map(item => {
            return (
              <Menu.Item key={item['name']}>
                <Link to={item['path']}>{item['name']}</Link>
              </Menu.Item>
            )
          })}
        </SubMenu>
      </Menu>
    )
  }
}

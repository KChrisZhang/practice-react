import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import './App.css'
import router from './router'

// import Home from './views/Home'
// import User from './views/User'
// import Login from './views/Login'
// import Counter from './views/Counter'
// import TodoApp from './views/TodoApp'
// import List from './views/List'
// import Detail from './views/Detail'
// import Error from './views/404'

import { Row, Col, Menu } from 'antd'
const { SubMenu } = Menu

class App extends React.Component {
  handleClick = e => {
    console.log('Menu[click] ', e.key)
  }
  render() {
    return (
      <div className="App">
        <div className="App-header"></div>
        <Row>
          <Col span={6}>
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
          </Col>

          <Col span={18}>
            {/* 一般重定向需要搭配Switch一起使用 */}
            {/* Switch 如果匹配到了路由，就不会再往下匹配了；如果不写Switch，则一直会匹配到404页面 */}
            <Switch>
              {router.map(route => {
                return <Route key={route.name} {...route}></Route>
              })}

              {/* 如果访问User页面，则重定向到List页面 */}
              {/* <Redirect from="/user" to="list"></Redirect> */}
              {/* <Route exact path="/">
                <Home title="首页"></Home>
              </Route>
              <Route path="/user">
                <User title="用户"></User>
              </Route>
              <Route path="/login">
                <Login title="登录"></Login>
              </Route>
              <Route path="/counter">
                <Counter title="计数器"></Counter>
              </Route>
              <Route path="/todo">
                <TodoApp title="todoApp"></TodoApp>
              </Route>
              <Route path="/list" component={List}></Route>
              <Route path="/detail/:id" component={Detail}></Route> */}
              {/* 没有写path表示匹配到所有路径 */}
              {/* <Route component={Error}></Route> */}
            </Switch>
          </Col>
        </Row>
      </div>
    )
  }
}

export default App

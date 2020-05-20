import React from 'react'
import { Switch, Route, Link, Redirect } from 'react-router-dom'
import './App.css'

import Home from './views/Home'
import User from './views/User'
import Login from './views/Login'
import Counter from './views/Counter'
import TodoApp from './views/TodoApp'
import List from './views/List'
import Detail from './views/Detail'
import Error from './views/404'

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">首页</Link>
        </li>
        <li>
          <Link to="/user">用户</Link>
        </li>
        <li>
          <Link to="/login">登录</Link>
        </li>
        <li>
          <Link to="/counter">计数器</Link>
        </li>
        <li>
          <Link to="/todo">todoApp</Link>
        </li>
        <li>
          <Link to="/list">列表</Link>
        </li>
      </ul>

      {/* 一般重定向需要搭配Switch一起使用 */}
      {/* Switch 如果匹配到了路由，就不会再往下匹配了；如果不写Switch，则一直会匹配到404页面 */}
      <Switch>
        {/* 如果访问User页面，则重定向到List页面 */}
        <Redirect from="/user" to="list"></Redirect>
        <Route exact path="/">
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
        <Route path="/detail/:id" component={Detail}></Route>
        {/* 没有写path表示匹配到所有路径 */}
        <Route component={Error}></Route>
      </Switch>
    </div>
  )
}

export default App

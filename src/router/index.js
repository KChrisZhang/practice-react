// import React from 'react'

import Home from '../views/Home'
import User from '../views/User'
import Login from '../views/Login'
import Counter from '../views/Counter'
import TodoApp from '../views/TodoApp'
import List from '../views/List'
import Detail from '../views/Detail'
import Error from '../views/404'

import About from '../views/User/About'
import Setting from '../views/User/Setting'
// import Loading from '../components/Loading'

/**
 * 按需加载，页面实现闪屏问题
 */
// const Home = React.lazy(() => import(/*webpackchunkname:Home*/ '../views/Home'))
// const User = React.lazy(() => import(/*webpackchunkname:User*/ '../views/User'))
// const Login = React.lazy(() => import('../views/Login'))
// const Counter = React.lazy(() => import('../views/Counter'))
// const TodoApp = React.lazy(() => import('../views/TodoApp'))
// const List = React.lazy(() => import('../views/List'))
// const Detail = React.lazy(() => import('../views/Detail'))
// const Error = React.lazy(() => import('../views/404'))

// const About = React.lazy(() => import('../views/User/About'))
// const Setting = React.lazy(() => import('../views/User/Setting'))

export default [
  {
    name: 'home',
    path: '/',
    exact: true,
    component: Home,
  },
  {
    name: 'user',
    path: '/user',
    component: User,
    routes: [
      {
        name: 'about',
        path: '/user/about',
        component: About,
      },
      {
        name: 'setting',
        path: '/user/setting',
        component: Setting,
      },
    ],
  },
  {
    name: 'login',
    path: '/login',
    component: Login,
  },
  {
    name: 'counter',
    path: '/counter',
    component: Counter,
  },
  {
    name: 'todo',
    path: '/todo',
    component: TodoApp,
  },
  {
    name: 'list',
    path: '/list',
    component: List,
  },
  {
    name: 'detail',
    path: '/detail/:id',
    component: Detail,
  },
  {
    name: 'error',
    path: '*',
    component: Error,
  },
]

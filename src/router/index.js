import React from 'react'

const Home = React.lazy(() => import(/*webpackchunkname:Home*/ '../views/Home'))
const User = React.lazy(() => import(/*webpackchunkname:User*/ '../views/User'))
const Login = React.lazy(() => import('../views/Login'))
const Counter = React.lazy(() => import('../views/Counter'))
const TodoApp = React.lazy(() => import('../views/TodoApp'))
const List = React.lazy(() => import('../views/List'))
const Detail = React.lazy(() => import('../views/Detail'))
const Error = React.lazy(() => import('../views/404'))

// const About = React.lazy(() => import('../views/User/About'))
// const Setting = React.lazy(() => import('../views/User/Setting'))

export default [
  {
    name: 'home',
    path: '/',
    exact: true,
    children() {
      return <Home title="首页"></Home>
    },
  },
  {
    name: 'user',
    path: '/user',
    children() {
      return <User title="用户页"></User>
    },
    // children: [
    //   {
    //     path: 'about',
    //     component: About,
    //   },
    //   {
    //     path: 'setting',
    //     component: Setting,
    //   },
    // ],
  },
  {
    name: 'login',
    path: '/login',
    children() {
      return <Login title="登录"></Login>
    },
  },
  {
    name: 'counter',
    path: '/counter',
    children() {
      return <Counter title="计数器"></Counter>
    },
  },
  {
    name: 'todo',
    path: '/todo',
    children() {
      return <TodoApp title="todoApp"></TodoApp>
    },
  },
  {
    name: 'list',
    path: '/list',
    children() {
      return <List title="列表页"></List>
    },
  },
  {
    name: 'detail',
    path: '/detail/:id',
    children() {
      return <Detail title="详情页"></Detail>
    },
  },
  {
    name: 'error',
    children() {
      return <Error title="错误"></Error>
    },
  },
]

import React from 'react'

const Home = React.lazy(() => import(/*webpackchunkname:Home*/ '../views/Home'))
const User = React.lazy(() => import(/*webpackchunkname:User*/ '../views/User'))
const Login = React.lazy(() => import('../views/Login'))
const Counter = React.lazy(() => import('../views/Counter'))
const TodoApp = React.lazy(() => import('../views/TodoApp'))
const List = React.lazy(() => import('../views/List'))
const Detail = React.lazy(() => import('../views/Detail'))
const Error = React.lazy(() => import('../views/404'))

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

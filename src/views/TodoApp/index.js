import React from 'react'
import Footer from '../../components/TodoApp/Footer'
import AddTodo from '../../components/TodoApp/containers/AddTodo'
import VisibleTodoList from '../../components/TodoApp/containers/VisibleTodoList'

const App = props => (
  <div>
    <h3>todoApp</h3>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)
export default App

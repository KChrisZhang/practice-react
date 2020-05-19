import { createStore, combineReducers } from 'redux'

/**
 * 这是一个reducer, 形式为(state, action) => state的纯函数
 */
function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

/**
 * 创建store存放应用状态
 * api: getState, subscribe, dispatch
 */
let store = createStore(counter)

/**
 * 1 手动订阅更新
 * 2 事件绑定到视图层
 */
store.subscribe(() => {
  store.getState()
})

/**
 * 改变内部state的唯一办法是 dispatch 一个 action
 */
store.dispatch({ type: 'INCREMENT' })
// 1
store.dispatch({ type: 'INCREMENT' })
// 2
store.dispatch({ type: 'DECREMENT' })
// 1

/**
 * action：描述变化
 */
const actions = [
  { type: 'ADD_TODO', text: 'Go to swimming pool' },
  { type: 'TOGGLE_TODO', index: 1 },
  { type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL' },
]

/**
 * 一个reducer：操作state的一部分
 */
function visibilityFilter(state = 'SHOW_ALL', action) {
  if (action.type === '') {
    return action.filter
  } else {
    return state
  }
}

/**
 * 一个reducer：操作state的一部分
 */
function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([{ text: action.text, completed: false }])
    case 'TOGGLE_TODO':
      return state.map((todo, index) =>
        action.index === index ? { text: todo.text, completed: !todo.completed } : todo
      )
    default:
      return state
  }
}

/**
 * 根reducer：调用小reducer，进而管理整个应用的state
 */
function todoApp(state = {}, action) {
  return {
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
  }
}

export const store2 = createStore(todoApp)

store2.dispatch({ type: 'COMPLETE_TODO', index: 1 })
store2.dispatch({ type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_COMPLETED' })

function todos2(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          text: action.text,
          completed: false,
        },
      ]
    case 'COMPLETE_TODO':
      return state.map((todo, index) => {
        if (todo.index === index) {
          return Object.assign({}, todo, { completed: true })
        }
        return todo
      })
    default:
      return false
  }
}

// reducers 合并
const reducer3 = combineReducers({ visibilityFilter, todos2 })
const store3 = createStore(reducer3)

/**
 * Question
 * 1. 全局state具有有哪些字段，怎么展示
 * 2. 页面调用时，怎么使用store
 */

/**
 * Principles
 * 1. 单一数据源
 * 2. state是只读的
 * 3. 使用纯函数来执行修改
 */

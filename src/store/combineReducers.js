import { combineReducers } from 'redux'

/**
 * counter
 */
import count from './reducers'
import hello from './reducers2'

/**
 * todo app
 */
import todos from '../store-todo/reducers/todos'
import visibilityFilter from '../store-todo/reducers/visibilityFilter'

const rootReducers = combineReducers({
  count,
  hello,
  todos,
  visibilityFilter,
})

export default rootReducers

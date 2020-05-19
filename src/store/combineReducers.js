import { combineReducers } from 'redux'
import count from './reducers'
import hello from './reducers2'

const rootReducers = combineReducers({
  count,
  hello,
})

export default rootReducers

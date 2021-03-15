import { createStore, combineReducers } from 'redux'
import userReducer from './ducks/userReducer'

const reducer = combineReducers({
  user: userReducer,
})

const store = createStore(reducer)

export default store
import { createStore, combineReducers } from 'redux'
import userReducer from './ducks/userReducer'
import generalReducer from './ducks/generalReducer'

const reducer = combineReducers({
  user: userReducer,
  general: generalReducer,
})

const store = createStore(reducer)

export default store
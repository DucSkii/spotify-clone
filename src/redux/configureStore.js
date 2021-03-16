import { createStore, combineReducers } from 'redux'
import userReducer from './ducks/userReducer'
import dropdownReducer from './ducks/dropdownReducer'

const reducer = combineReducers({
  user: userReducer,
  dropdown: dropdownReducer,
})

const store = createStore(reducer)

export default store
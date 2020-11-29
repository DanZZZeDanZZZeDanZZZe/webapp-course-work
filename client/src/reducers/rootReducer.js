import { combineReducers } from 'redux'
import { headerReducer } from './headerReducer'
import { userReducer } from './userReducer'

export const rootReducer = combineReducers({
  header: headerReducer,
  user: userReducer,
})

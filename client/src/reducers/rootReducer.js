import { combineReducers } from 'redux'
import { calendarReducer } from './calendarReducer'
import { headerReducer } from './headerReducer'
import { userReducer } from './userReducer'

export const rootReducer = combineReducers({
  header: headerReducer,
  user: userReducer,
  calendar: calendarReducer,
})

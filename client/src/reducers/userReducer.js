import { LOGIN_USER, SET_TOKEN } from '../actions/userActions'

const initialState = {
  token: null,
  email: null,
}

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        email: action.payload.email,
        token: action.payload.token,
        id: action.payload.id,
      }
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload.token,
      }
    default:
      return state
  }
}

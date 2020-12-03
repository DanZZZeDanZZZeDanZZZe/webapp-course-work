import { LOGIN_USER, SET_TOKEN, LOGOUT_USER } from '../actions/userActions'

const initialState = {
  token: null,
  email: null,
  id: null,
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
    case LOGOUT_USER:
      return {
        ...state,
        ...initialState,
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

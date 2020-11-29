import { LOGIN_USER } from '../actions/userActions'

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
      }
    default:
      return state
  }
}

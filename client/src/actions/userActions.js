export const LOGIN_USER = 'LOGIN_USER'
export const SET_TOKEN = 'SET_TOKEN'

export function loginUser(token, email, userId) {
  return {
    type: 'LOGIN_USER',
    payload: {
      token,
      email,
      id: userId,
    },
  }
}

export function setToken(token) {
  return {
    type: 'SET_TOKEN',
    payload: {
      token,
    },
  }
}

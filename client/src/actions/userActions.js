export const LOGIN_USER = 'LOGIN_USER'

export function loginUser(token, email) {
  return {
    type: 'LOGIN_USER',
    payload: {
      token,
      email,
    },
  }
}

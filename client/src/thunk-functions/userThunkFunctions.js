import { loginUser, logoutUser } from '../actions/userActions'
import localStorageController from '../local-storage-controller/localStorageController'

const loginUserThunk = (data) => async (dispatch, getState) => {
  try {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error(response.message || 'Something went wrong')
    }
    const { email } = data
    const { token, userId } = await response.json()
    localStorageController.setUser({ token, userId, email })
    dispatch(loginUser(token, data.email, userId))
  } catch ({ message }) {
    alert(message)
  }
}

const logoutUserThunk = (data) => (dispatch, getState) => {
  localStorageController.removeUser()
  dispatch(logoutUser())
}

const registrationUserThunk = (data) => async (dispatch, getState) => {
  try {
    const response = await fetch('/api/users/registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error(response.message || 'Something went wrong')
    }
  } catch ({ message }) {
    alert(message)
  }
}

export { loginUserThunk, logoutUserThunk, registrationUserThunk }

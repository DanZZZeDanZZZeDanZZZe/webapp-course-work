import { loginUser } from '../actions/userActions'
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
      throw new Error(data.message || 'Something went wrong')
    }
    const { email } = data
    const { token, userId } = await response.json()
    localStorageController.setUser({ token, userId, email })
    dispatch(loginUser(token, data.email, userId))
  } catch ({ message }) {
    alert(message)
  }
}

export { loginUserThunk }

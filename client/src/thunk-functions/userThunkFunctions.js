import { loginUser } from '../actions/userActions'

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

    const { token, userId } = await response.json()
    dispatch(loginUser(token, data.email, userId))
  } catch ({ message }) {
    alert(message)
  }
}

export { loginUserThunk }

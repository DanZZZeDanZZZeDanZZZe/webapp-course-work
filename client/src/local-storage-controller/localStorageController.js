const storage = window.localStorage

const localStorageController = {
  getUser() {
    return {
      token: JSON.parse(storage.getItem('token')),
      email: JSON.parse(storage.getItem('email')),
      userId: JSON.parse(storage.getItem('userId')),
    }
  },

  checkUser() {
    const { token, email, userId } = this.getUser()
    return token && email && userId
  },

  setUser({ token, userId, email }) {
    storage.setItem('token', JSON.stringify(token))
    storage.setItem('userId', JSON.stringify(userId))
    storage.setItem('email', JSON.stringify(email))
  },
}

export default localStorageController

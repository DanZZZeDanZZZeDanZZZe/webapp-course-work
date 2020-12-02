import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Authorization from './routes/Authorization'
import Header from './components/Header'
import { useDispatch, useSelector } from 'react-redux'
import localStorageController from './local-storage-controller/localStorageController'
import { loginUser } from './actions/userActions'

const AppRouter = () => {
  const dispatch = useDispatch(loginUser())
  const token = useSelector((state) => state.user.token)

  useEffect(() => {
    if (!token && localStorageController.checkUser()) {
      const { token, email, userId } = localStorageController.getUser()
      dispatch(loginUser(token, email, userId))
    }
  })

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/">{token ? <h1>Calendar</h1> : <Authorization />}</Route>
        <Route path="/calendar">
          {!token ? <Authorization /> : <h1>Calendar</h1>}
        </Route>
      </Switch>
    </Router>
  )
}

export default AppRouter

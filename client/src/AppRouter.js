import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Authorization from './routes/Authorization'
import Header from './components/Header'
import { useDispatch, useSelector } from 'react-redux'
import localStorageController from './local-storage-controller/localStorageController'
import { loginUser } from './actions/userActions'
import CalendarPage from './routes/CalendarPage'
import NotePage from './routes/NotePage'
import RegistrationPage from './routes/RegistrationPage'

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
        <Route path="/" exact>
          {!token ? (
            <Redirect to="/authorization" />
          ) : (
            <Redirect to="/calendar" />
          )}
        </Route>
        <Route path="/calendar">
          {!token ? <Redirect to="/authorization" /> : <CalendarPage />}
        </Route>
        <Route path="/note">
          {!token ? <Redirect to="/authorization" /> : <NotePage />}
        </Route>
        RegistrationPage
        <Route path="/authorization" exact>
          {token ? <Redirect to="/calendar" /> : <Authorization />}
        </Route>
        <Route path="/registration" exact>
          {token ? <Redirect to="/calendar" /> : <RegistrationPage />}
        </Route>
      </Switch>
    </Router>
  )
}

export default AppRouter

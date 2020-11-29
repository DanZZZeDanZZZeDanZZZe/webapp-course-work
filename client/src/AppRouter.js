import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Authorization from './routes/Authorization'
import Header from './components/Header'
import { useSelector } from 'react-redux'

const AppRouter = () => {
  const token = useSelector((state) => state.user.token)
  console.log('🚀 ~ file: AppRouter.js ~ line 9 ~ AppRouter ~ token', token)

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

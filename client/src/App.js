import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Authorization from './routes/Authorization'
import Header from './components/Header'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/">
          <Authorization />
        </Route>
      </Switch>
    </Router>
  )
}

export default App

import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Authorization from './routes/Authorization'
import Header from './components/Header'
import { store } from './store/store'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route path="/">
            <Authorization />
          </Route>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App

import React from 'react'
import {Auth} from './auth/Auth'
import { Router, Route } from 'react-router-dom'
import Callback from './components/Callback'
import createHistory from 'history/createBrowserHistory'
import App from './App';
const history = createHistory()

const auth = new Auth(history)

const handleAuthentication = (props) => {
  const location = props.location
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication()
  }
}

export const MakeAuthRouting = () => {
  return (
    <Router history={history}>
      <div>
        <Route
          path="/callback"
          render={props => {
            handleAuthentication(props)
            return <Callback />
          }}
        />
        <Route
        path="/"
          render={props => {
          //  handleAuthentication(props)
            return <App auth={auth} {...props} />
          }}
        />
      </div>
    </Router>
  )
}

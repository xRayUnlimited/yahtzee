import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { 
  ProtectedRoute,
  Login,
  Register,
  NavBar,
  FetchUser,
} from '@devpoint/dps-react-kit'
import {
  login,
  register,
  logout,
  validateToken,
} from './actions/auth';
import Game from './components/Game'
import Scores from './components/Scores'

const authRoutes = [
  { url: '/', text: 'Play Yahtzee' },
  { url: '/scores', text: 'Scores' },
]

const App = () => (
  <div>
    <NavBar 
      authRoutes={authRoutes}
      handleLogout={logout} 
    />
    <FetchUser validateToken={validateToken}>
      <Switch>
        <ProtectedRoute 
          exact 
          path="/"
          component={Game}
        />
        <ProtectedRoute
          exact
          path="/scores"
          component={Scores}
        />
        <Route
          exact
          path="/login"
          render={ props => 
            <Login {...props} handleLogin={login} />
          }
        />
        <Route
          exact
          path="/register"
          render={ props =>
            <Register 
              {...props} 
              registerUser={register}
            />
          }
        />
      </Switch>
    </FetchUser>
  </div>
)

export default App
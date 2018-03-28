import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Game from './components/Game'
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

const App = () => (
  <div>
    <NavBar handleLogout={logout} />
    <FetchUser validateToken={validateToken}>
      <Switch>
        <ProtectedRoute 
          exact 
          path="/"
          component={Game}
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
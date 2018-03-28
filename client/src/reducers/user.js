import { LOGIN, LOGOUT } from '../actions/auth';

const user = ( state = {}, action ) => {
  switch (action.type){
  case LOGIN:
  case LOGOUT:
  default:
    return state
  }
}

export default user;



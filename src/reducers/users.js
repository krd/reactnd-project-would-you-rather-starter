import { GET_USERS, GET_USERS_SCORES, LOGIN_USER } from '../actions/users';

export default function users(state = {}, action) {
  switch (action.type) {
    case GET_USERS:
      return { ...state, ...action.users };
    case GET_USERS_SCORES:
      return { ...state };
    case LOGIN_USER:
      return { ...state };
    default:
      return state;
  }
}

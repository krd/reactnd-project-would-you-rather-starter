import { SET_AUTHED_USER } from '../actions/authedUser';

export default function authedUser(state = null, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      if (action.id) {
        return action.id;
      } else {
        // log out current user
        return null;
      }
    default:
      return state;
  }
}

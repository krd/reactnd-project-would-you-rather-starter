export const GET_USERS = 'GET_USERS'
export const GET_USERS_SCORES = 'GET_USER_SCORES'
export const LOGIN_USER = 'LOGIN_USER'

// action creator
export function getUsers(users) {
    return {
        type: GET_USERS,
        users
    }
}

export function getUserScores(users) {
    return {
        type: GET_USERS_SCORES,
        users
    }
}

export function loginUser(userId) {
  return {
      type: LOGIN_USER,
      userId
  }
}
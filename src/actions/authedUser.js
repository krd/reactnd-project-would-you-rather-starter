export const SET_AUTHED_USER = 'SET_AUTHED_USER';
export const GET_AUTHED_USER = 'GET_AUTHED_USER';

// action creator
export function setAuthedUser(id) {
 return { type: SET_AUTHED_USER, id }
}

// action creator
export function getAuthedUser(authedUser) {
    return {
        type: GET_AUTHED_USER,
        authedUser
    }
}
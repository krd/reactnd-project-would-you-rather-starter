import { getInitialData } from '../utils/api'
import { setAuthedUser } from './authedUser'
import { getQuestions } from './questions'
import { getUsers } from './users'

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData(action) {
    return (dispatch) => {
        console.log('in handleIntialData with action: ', action)
        return getInitialData().then(({ users, questions }) => {
            dispatch(getUsers(users))
            dispatch(setAuthedUser(AUTHED_ID))
            dispatch(getQuestions(questions))        
        })
    }
}
import { getInitialData } from '../utils/api'
import { fetchQuestions } from './questions'
// import { setAuthedUser } from './authedUser'

// const AUTHED_ID = 'tylermcginnis'

export function handleInitialData(action) {
    return (dispatch) => {
        
        return getInitialData().then(({ users, questions }) => {
            dispatch(fetchQuestions(questions))
            // dispatch(setAuthedUser(AUTHED_ID))
            console.log('Users: ', users)
        })
    }
}
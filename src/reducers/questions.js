import { GET_QUESTIONS, ADD_QUESTION, ADD_ANSWER } from '../actions/questions';

export default function questions(state = {}, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return { ...state, ...action.questions };
    case ADD_QUESTION:
      return { ...state };
    case ADD_ANSWER:

      const { answer } = action
      const { selection, user } = answer;
      const question = state[answer.qid];
      const { optionOne, optionTwo } = question
      const { answers } = user

      if (selection === 'optionOne') {
        const { votes } = optionOne
        votes.includes(user.id) ?  '' : optionOne.votes.push(user.id)
      } else if (selection === 'optionTwo') {
        const { votes } = optionTwo
        votes.includes(user.id) ?  '' : optionTwo.votes.push(user.id)
      }
      answers[answer.qid] = selection
      return { ...state };
    default:
      return state;
  }
}

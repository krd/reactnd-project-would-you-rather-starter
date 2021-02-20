import {
  FETCH_QUESTIONS,
  ADD_QUESTION,
  ANSWER_QUESTION,
} from '../actions/questions';

export default function questions(state = {}, action) {
  switch (action.type) {
    case FETCH_QUESTIONS:
      return { ...state, ...action.questions };
    case ADD_QUESTION:
      return state;
    case ANSWER_QUESTION:
      return state;
    default:
      return state;
  }
}

import { ADD_QUESTION } from '../actions/questions';
import { SET_AUTHED_USER } from '../actions/authedUser'

const validator = (store) => (next) => (action) => {
  if (action.type === ADD_QUESTION) {
    if (action.question.optionOne.text.trim() === '') {
      return alert('Please enter a value for the Option one.');
    }
    if (action.question.optionTwo.text.trim() === '') {
      return alert('Please enter a value for the Option two.');
    }
  }
//   if (action.type === SET_AUTHED_USER) {
//     if (action.id === undefined) {
//       return alert('Please select a user to sign in.');
//     }
//   }

  return next(action);
};
export default validator;

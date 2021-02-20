import { saveQuestion } from '../utils/api';

export const FETCH_QUESTIONS = 'FETCH_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';

// fetch questions action creator
export function fetchQuestions(questions) {
  return { type: FETCH_QUESTIONS, questions };
}

// add question action creator
export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

// async action creator for thunk
export function handleAddQuestions(question) {
  return (dispatch, getState) => {
    // const { authedUser } = getState()
    return saveQuestion(question)
      .then((question) => {
        dispatch(addQuestion(question));
      })
      .catch((e) => {
        console.error(e);
        alert(
          'An error occurred while saving your question.  Please try again.'
        );
      });
  };
}

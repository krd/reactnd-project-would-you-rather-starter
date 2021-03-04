import { saveQuestion } from '../utils/api';
import { _saveQuestionAnswer } from '../utils/_DATA';
export const GET_QUESTIONS = 'FETCH_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';
export const ADD_ANSWER = 'ADD_ANSWER';

// fetch questions action creator
export function getQuestions(questions) {
  return { type: GET_QUESTIONS, questions };
}

// add question action creator
export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function addAnswer(answer) {
  return {
    type: ADD_ANSWER,
    answer,
  };
}

// async action creator for thunk
export function handleAddQuestions(question) {
  return (dispatch, getState) => {
    return saveQuestion(question)
      .then((question) => {
        const { questions } = getState();
        questions[question.id] = question;
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

export function handleSaveQuestionAnswer(qid, answer, user) {
  return (dispatch) => {
    return _saveQuestionAnswer({ authedUser: user.id, qid, answer })
      .then(() => {
        dispatch(addAnswer({ selection: answer, qid, user }));
      })
      .catch((e) => {
        console.warn(e);
        alert('Error saving your answer.');
      });
  };
}

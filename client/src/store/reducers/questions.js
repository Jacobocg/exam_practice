import * as ActionTypes from '../actionTypes';

const initialState = {questions: [], status: 'inited'};

export const questions = (state = initialState, action) => {
  switch (action.type) {
    // all questions logic
    case ActionTypes.GET_ALL_QUESTIONS:
      return {...state, status: 'loading'};
    case ActionTypes.GET_ALL_QUESTIONS_SUCCESS:
      return {
        questions: action.payload.questions,
        status: 'done',
      };
    case ActionTypes.ANSWER_QUESTION_ERROR:
    case ActionTypes.CREATE_QUESTION_ERROR:
    case ActionTypes.GET_ALL_QUESTIONS_ERROR:
      return {
        ...state,
        status: 'error',
        error: action.payload.error,
      };
    // answer questions logic
    case ActionTypes.ANSWER_QUESTION_SUCCESS: {
      const newQuestions = state.questions.map(q => q.id === action.payload.id ? action.payload : q);
      return Object.assign({}, state, {questions: newQuestions});
    }
    case ActionTypes.CREATE_QUESTION_SUCCESS: {
      const newQuestions = [...state.questions, action.payload];
      return {...state, questions: newQuestions};
    }
    case ActionTypes.DELETE_QUESTION: {
      const newQuestions = state.questions.filter(question => question.id !== action.questionId);
      return {...state, questions: newQuestions};
    }
    case ActionTypes.SEARCH_QUESTIONS: {
      const newQuestions = state.questions.filter(question => question.text.toLowerCase().indexOf(action.tag.toLowerCase()) !== -1);
      return {...state, questions: newQuestions, search: true};
    }
    default:
      return state;
  }
};

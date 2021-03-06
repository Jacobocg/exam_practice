import * as ActionTypes from '../actionTypes';

let nextNotificationId = 0;

export const helloWorldAction = () => ({
  type: ActionTypes.HELLO_WORLD,
});

export const loginAction = payload => ({
  type: ActionTypes.DO_LOGIN,
  payload,
});

export const logoutAction = () => ({
  type: ActionTypes.DO_LOGOUT,
});

export const registerAction = payload => ({
  type: ActionTypes.DO_REGISTER,
  payload,
});

/**
 * Add a notification to the store.
 * @param {String} text - text to display
 * @param {String} alertType - Bootstrap alert style: success | info | warning | danger
*/
export const addNotificationAction = ({text, alertType}) => ({
  type: ActionTypes.ADD_NOTIFICATION,
  payload: {
    id: nextNotificationId++,
    text,
    alertType,
  },
});

/**
 * Remove a notification from the store.
 * @param {String} notificationId
*/

export const removeNotificationAction = notificationId => ({
  type: ActionTypes.REMOVE_NOTIFICATION,
  payload: {notificationId},
});

export const removeAllNotificationsAction = () => ({
  type: ActionTypes.REMOVE_ALL_NOTIFICATIONS,
});

export const getAllQuestions = () => ({
  type: ActionTypes.GET_ALL_QUESTIONS,
});

export const answerQuestion = payload => ({
  type: ActionTypes.ANSWER_QUESTION,
  payload,
});

export const createQuestion = payload => ({
  type: ActionTypes.CREATE_QUESTION,
  payload,
});

export const deleteQuestion = questionId => ({
  type: ActionTypes.DELETE_QUESTION,
  questionId,
});

export const searchQuestions = tag => ({
  type: ActionTypes.SEARCH_QUESTIONS,
  tag,
});

export const filterNoAnswerQuestions = () => ({
  type: ActionTypes.FILTER_NO_ANSWER_QUESTIONS,
});

export const getUserProfile = userId => ({
  type: ActionTypes.GET_USER_PROFILE,
  userId,
});

// export const voteQuestion = questionId => ({
//   type: ActionTypes.VOTE_QUESTION,
//   questionId,
// });
//
// export const sortQuestionsByVotes = () => ({
//   type: ActionTypes.SORT_QUESTIONS_BY_VOTES,
// });

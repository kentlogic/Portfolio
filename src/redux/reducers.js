import {
  REQUEST_PROJECTS_PENDING,
  REQUEST_PROJECTS_SUCCESS,
  REQUEST_PROJECTS_FAILED,
  SEND_MESSAGE_PENDING,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAILED,
  CLEAR_MESSAGE_STATE,
} from "./constants.js";

const projectState = {
  isProjPending: false,
  projects: [],
  projError: "",
};

const messageState = {
  messagePending: false,
  messageResult: "",
};

export const requestProjects = (state = projectState, action = {}) => {
  switch (action.type) {
    case REQUEST_PROJECTS_PENDING:
      return Object.assign({}, state, { isProjPending: true });

    case REQUEST_PROJECTS_SUCCESS:
      return Object.assign({}, state, {
        isProjPending: false,
        projects: action.payload,
      });

    case REQUEST_PROJECTS_FAILED:
      return Object.assign({}, state, {
        isProjPending: false,
        projError: action.payload,
      });

    default:
      return state;
  }
};

export const sendMessage = (state = messageState, action = {}) => {
  switch (action.type) {
    case SEND_MESSAGE_PENDING:
      return Object.assign({}, state, { messagePending: true });

    case SEND_MESSAGE_SUCCESS:
      return Object.assign({}, state, {
        messagePending: false,
        messageResult: action.payload,
      });

    case SEND_MESSAGE_FAILED:
      return Object.assign({}, state, {
        messagePending: false,
        messageResult: action.payload,
      });
    case CLEAR_MESSAGE_STATE:
      return Object.assign({}, state, {
        messagePending: false,
        messageResult: "",
      });

    default:
      return state;
  }
};

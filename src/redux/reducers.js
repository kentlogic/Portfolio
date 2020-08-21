import {
  REQUEST_PROJECTS_PENDING,
  REQUEST_PROJECTS_SUCCESS,
  REQUEST_PROJECTS_FAILED,
} from "./constants.js";

const initialState = {
  isProjPending: false,
  projects: [],
  projError: "",
};

export const requestProjects = (state = initialState, action = {}) => {
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

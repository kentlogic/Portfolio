import {
  REQUEST_PROJECTS_PENDING,
  REQUEST_PROJECTS_SUCCESS,
  REQUEST_PROJECTS_FAILED,
} from "./constants.js";

export const requestProjects = () => (dispatch) => {
  dispatch({ type: REQUEST_PROJECTS_PENDING });
  fetch("http://localhost:5001/projects/3")
    .then((result) => result.json())
    .then((data) => dispatch({ type: REQUEST_PROJECTS_SUCCESS, payload: data }))
    .catch((error) =>
      dispatch({ type: REQUEST_PROJECTS_FAILED, payload: error })
    );
};

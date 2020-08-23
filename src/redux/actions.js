import {
  REQUEST_PROJECTS_PENDING,
  REQUEST_PROJECTS_SUCCESS,
  REQUEST_PROJECTS_FAILED,
  SEND_MESSAGE_PENDING,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAILED,
  CLEAR_MESSAGE_STATE,
} from "./constants.js";

export const requestProjects = () => (dispatch) => {
  dispatch({ type: REQUEST_PROJECTS_PENDING });
  fetch("https://kentlogic-api.herokuapp.com/projects/3")
    .then((result) => result.json())
    .then((data) => dispatch({ type: REQUEST_PROJECTS_SUCCESS, payload: data }))
    .catch((error) =>
      dispatch({ type: REQUEST_PROJECTS_FAILED, payload: error })
    );
};

export const sendMessage = (message) => (dispatch) => {
  if (message) {
    dispatch({ type: SEND_MESSAGE_PENDING });
    fetch("https://kentlogic-api.herokuapp.com/message", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: message.email,
        name: message.name,
        subject: message.subject,
        body: message.message,
      }),
    })
      .then((result) => result.json())
      .then((data) => {
        if (data.code === 400) {
          dispatch({ type: SEND_MESSAGE_FAILED, payload: data.message });
        } else {
          dispatch({ type: SEND_MESSAGE_SUCCESS, payload: data.message });
        }
      })
      .catch((error) =>
        dispatch({ type: SEND_MESSAGE_FAILED, payload: error })
      );
  } else {
    dispatch({ type: CLEAR_MESSAGE_STATE });
  }
};

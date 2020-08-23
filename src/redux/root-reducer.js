import { requestProjects, sendMessage } from "./reducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  requestProjects,
  sendMessage,
});

export default rootReducer;

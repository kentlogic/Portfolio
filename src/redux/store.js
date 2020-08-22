import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./root-reducer";

const middlewares = [];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger, thunkMiddleware);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default { store };

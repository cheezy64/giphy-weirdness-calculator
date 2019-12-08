import {
  applyMiddleware as applyReduxMiddleware,
  combineReducers,
  createStore as createReduxStore,
} from "redux";
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools as composeWithReduxDevTools } from "redux-devtools-extension";

import * as reducers from "../ducks";

export const setupStore = () => {
  const logger = createLogger();
  const middlewares = [thunkMiddleware];

  if (process.env.NODE_ENV === "development") {
    middlewares.push(logger);
  }

const rootReducers = combineReducers(reducers);

  return createReduxStore(
    rootReducers,
    composeWithReduxDevTools(
      applyReduxMiddleware(...middlewares),
    ),
  );
};
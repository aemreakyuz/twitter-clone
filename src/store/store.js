import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { rootReducers } from "./reducers";
import logger from "redux-logger";
import { composeWithDevTools } from "@redux-devtools/extension/";
import thunk from "redux-thunk";
import { customMiddleware } from "./middlewares/customMiddleware";

const middlewares = applyMiddleware(thunk, logger, customMiddleware);

export const myStore = createStore(
  rootReducers,
  composeWithDevTools(middlewares)
);

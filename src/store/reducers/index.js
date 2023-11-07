import { combineReducers } from "redux";
import { tweetReducer } from "./tweetReducer";

export const rootReducers = combineReducers({
  tweets: tweetReducer,
});

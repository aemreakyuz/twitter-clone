import {
  DELETE_TWEET,
  GET_TWEETS,
  POST_TWEET,
  UPDATE_TWEET,
} from "../actions/tweetActions";

const initialState = [];

export const tweetReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TWEETS:
      return action.payload;

    case DELETE_TWEET:
      const newState = state.filter((tweet) => tweet.id !== action.payload);
      return newState;

    case POST_TWEET:
      return [action.payload, ...state];

    case UPDATE_TWEET:
      return state.map((tweet) => {
        if (tweet.id === action.payload.id) {
          return action.payload;
        } else {
          return tweet;
        }
      });

    default:
      return state;
  }
};

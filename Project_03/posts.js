const { createStore } = require("redux");

//initial state
const initalState = {
  posts: [],
};

const FETCH_SUCCESS = "FETCH_SUCCESS";
const FETCH_FAILURE = "FETCH_FAILURE";
const REQUEST_STARTED = "REQUEST_STARTED";

// actions-->action, action creator
const fetchPostRequest = () => {
  return { type: REQUEST_STARTED };
};
const fetchPostSuccess = () => {
  return { type: FETCH_SUCCESS };
};
const fetchPostFailure = () => {
  return { type: FETCH_FAILURE };
};

//reducers
const postsReducer = (state = initalState, action) => {};

//store
const store = createStore(postsReducer);

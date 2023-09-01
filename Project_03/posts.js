const { createStore, applyMiddleware } = require("redux");
const loggerMiddleware = require("redux-logger").createLogger();

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
const postsReducer = (state = initalState, action) => {
  switch (action.type) {
    case "REQUEST_STARTED":
      return {
        posts: ["Hello Guys"],
      };
  }
};

//store
const store = createStore(postsReducer, applyMiddleware(loggerMiddleware));

//subscribe
store.subscribe(() => {
  const data = store.getState();
  console.log(data);
});

//dispatch
store.dispatch(fetchPostRequest());
store.dispatch(fetchPostRequest());

const { createStore, applyMiddleware } = require("redux");
const thunk = require("redux-thunk");
const axios = require("axios");

//initial state
const initalState = {
  posts: [],
  eror: "",
  loading: false,
};

const FETCH_SUCCESS = "FETCH_SUCCESS";
const FETCH_FAILURE = "FETCH_FAILURE";
const REQUEST_STARTED = "REQUEST_STARTED";

// actions-->action, action creator
const fetchPostRequest = () => {
  return { type: REQUEST_STARTED };
};
const fetchPostSuccess = (posts) => {
  return { type: FETCH_SUCCESS, payload: posts };
};
const fetchPostFailure = (err) => {
  return { type: FETCH_FAILURE };
};
const fetchPosts = () => {
  return async (dispatch) => {
    try {
      //dispatch
      dispatch(fetchPostRequest());
      const data = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      //success
      dispatch(fetchPostSuccess(data));
    } catch (error) {
      //error
      dispatch(fetchPostFailure(error.message));
    }
  };
};
//reducers
const postsReducer = (state = initalState, action) => {
  switch (action.type) {
    case REQUEST_STARTED:
      return {
        ...state,
        loading: true,
      };
  }
};

//store
const store = createStore(postsReducer, applyMiddleware(thunk));

//subscribe
store.subscribe(() => {
  const data = store.getState();
  console.log(data);
});

//dispatch
store.dispatch(fetchPosts());

const { createStore } = require("redux");

//initial state
const initialState = {
  posts: [],
};

//actions --> action-action creator
{
  type: "ADD_POST";
}
{
  type: "REMOVE_POST";
}

//action types
const ADD_POST = "ADD_POST";
const REMOVE_POST = "REMOVE_POST";
const addPostAction = (post) => {
  return {
    type: ADD_POST,
    payload: post,
  };
};

const removePostAction = (id) => {
  return {
    type: REMOVE_POST,
    id,
  };
};

//reducer
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        posts: [...state.posts, action.payload],
      };
    case REMOVE_POST:
      return {
        posts: state.posts.filter((post) => {
          return post.id !== action.id;
        }),
      };
    default:
      return state;
  }
};
//store
const store = createStore(postReducer);
//subscribe to store
store.subscribe(() => {
  const data = store.getState();
  console.log(data);
});

// add post actions
store.dispatch(
  addPostAction({
    id: 1,
    title: "Hello Guys !!",
  })
);
store.dispatch(
  addPostAction({
    id: 2,
    title: "How was your day ?",
  })
);
store.dispatch(
  addPostAction({
    id: 3,
    title: "Everythings was okey .",
  })
);
store.dispatch(removePostAction(2));

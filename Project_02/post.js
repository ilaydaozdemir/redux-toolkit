const { createStore, combineReducers } = require("redux");

//initial state
const initialState = {
  posts: [],
};

const usersInitialState = {
  users: [],
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
const ADD_USER = "ADD_USER";

const addPostAction = (post) => {
  return {
    type: ADD_POST,
    payload: post,
  };
};
const addUserAction = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

const removePostAction = (id) => {
  return {
    type: REMOVE_POST,
    id,
  };
};

//Post reducer
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

//User reducer
const userReducer = (state = usersInitialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  posts: postReducer,
  users: userReducer,
});

//store
const store = createStore(rootReducer);

//subscribe to store
store.subscribe(() => {
  const data = store.getState();
  console.log("posts", data.posts);
  console.log("users", data.users);
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
store.dispatch(addUserAction({ name: "Ilayda" }));

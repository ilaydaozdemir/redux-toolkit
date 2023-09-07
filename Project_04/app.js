const { createAction } = require("@reduxjs/toolkit");

//initial state
const initialState = {
  count: 0,
};
//actions
const increment = createAction("INCREMENT");
console.log(increment(20));
//reducer
//store

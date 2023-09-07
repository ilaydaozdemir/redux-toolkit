const { createAction, nanoid } = require("@reduxjs/toolkit");

//initial state
const initialState = {
  count: 0,
};
//actions
const increment = createAction("INCREMENT");
const decrement = createAction("DECREMENT");
const resetCounter = createAction("RESET");

//customising createAction
const incrementBy = createAction("INCREMENT_BY", (amount, user) => {
  return {
    payload: {
      amount,
      user,
      id: nanoid(),
    },
  };
});
console.log(incrementBy(20, "ilayda"));
//reducer
//store

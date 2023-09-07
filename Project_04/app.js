const { createAction, nanoid, createReducer } = require("@reduxjs/toolkit");

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
    },
  };
});
console.log(incrementBy(20, "ilayda"));
//reducer
//1.builder callback notation
//2.map object notation

//1.builder callback notation
const counterSlice2 = createReducer(initialState, (builder) => {
  //for increment
  builder.addCase(increment, (state) => {
    state.count += 1;
  });
  //for decrement
  builder.addCase(decrement, (state) => {
    state.count -= 1;
  });
  //for resetCounter
  builder.addCase(resetCounter, (state) => {
    state.count = 0;
  });
  //for incrementBy
  builder.addCase(incrementBy, (state, action) => {
    state.count += action.payload.amount;
  });
});

//2.map object notation
const counterSlice = createAction(initialState, {
  [increment]: (state) => {
    state.counter += 1;
  },
  [decrement]: (state) => {
    state.counter -= 1;
  },
  [resetCounter]: (state) => {
    state.counter = 0;
  },
  [resetCounter]: (state, action) => {
    state.counter += action.payload.amount;
  },
});
//store

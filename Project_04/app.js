const {
  createAction,
  nanoid,
  createReducer,
  configureStore,
} = require("@reduxjs/toolkit");

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

//reducer
//1.builder callback notation
//2.map object notation

//1.builder callback notation
const counterSlice = createReducer(initialState, (builder) => {
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

//store
const store = configureStore({
  reducer: counterSlice,
});

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(incrementBy(55));
console.log(store.getState());

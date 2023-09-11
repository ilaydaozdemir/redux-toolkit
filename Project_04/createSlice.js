const { createSlice, configureStore } = require("@reduxjs/toolkit");

//initial state
const initialState = {
  counter: 0,
};
//createSlice
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incerement: (state, action) => {
      state.counter += 1;
    },
    decrement: (state, action) => {
      state.counter -= 1;
    },
    reset: (state, action) => {
      state.counter = 0;
    },
    incerementByAmount: (state, action) => {
      state.counter += action.payload;
    },
  },
});

//generate actions
const { incerement, decrement, reset, incerementByAmount } =
  counterSlice.actions;

//generate reducer
const counterReducer = counterSlice.reducer;

//store
const store = configureStore({
  reducer: counterReducer,
});

//dispatch
store.dispatch(incerement());
store.dispatch(incerementByAmount(55));
store.dispatch(reset());
console.log(store.getState());

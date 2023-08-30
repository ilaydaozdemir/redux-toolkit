const { createStore } = require("redux");

//initial state
const initialState = {
  count: 0,
};
//actions--> action-action creator
{
  type: "INCREMENT";
}
const incrementAction = () => {
  return {
    type: "INCREMENT",
  };
};

{
  type: "DECREMENT";
}
const decrementAction = () => {
  return {
    type: "DECREMENT",
  };
};
{
  type: "RESET";
}
const resetAction = () => {
  return {
    type: "RESET",
  };
};
{
  type: "INC_BY_AMOUNT";
}

const byAmount = (anyAmount) => {
  return {
    type: "INC_BY_AMOUNT",
    payload: anyAmount,
  };
};
//reducer
const counterReducer = (state = initialState, action) => {
  console.log(action);
  //console.log(state);
  if (action.type === "INCREMENT") {
    return (count = state.count + 5);
  } else if (action.type === "DECREMENT") {
    return (count = count - 1);
  } else if (action.type === "RESET") {
    return (count = 0);
  } else if (action.type === "INC_BY_AMOUNT") {
    return (count = state.count + action.payload);
  }
};

//store

const store = createStore(counterReducer);

//subscribe to store
store.subscribe(() => {
  const data = store.getState();
  console.log(data);
});
//dispatch action
//store.dispatch(incrementAction());
//store.dispatch(decrementAction());
//store.dispatch(resetAction());

//dispatch action with payload
store.dispatch(byAmount(10));

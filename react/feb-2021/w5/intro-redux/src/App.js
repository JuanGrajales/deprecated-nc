import React, { Component } from "react";
import { createStore } from "redux";

// action - a function that returns an object
const incrementAction = () => {
  return {
    type: "add",
  };
};

// state saved in store
let initialState = {
  count: 0,
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "add":
      return { count: state.count + 1 };
    default:
      return state;
  }
};

// store
let store = createStore(reducer);

// not used in React, just using it to show the state in the store
store.subscribe(() => console.log(store.getState()));

// dispatching an action
store.dispatch({
  type:
    "actions that don't exist will hit the default in the switch of the reducer",
});

// dispatch again
store.dispatch(incrementAction());

// dispatch again
store.dispatch(incrementAction());

class App extends Component {
  render() {
    return (
      <div>
        <h1>Redux Intro</h1>
        <h2>Current state in store: {store.getState().count}</h2>
      </div>
    );
  }
}

export default App;

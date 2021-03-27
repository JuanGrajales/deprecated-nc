import React, { Component } from "react";
import { createStore } from "redux";

// actionTypes - describes the actions of the object
// actions - objects
// dispatch - which takes the objects and sends it to the store and then the store checks all its reducers
// store - which holds the data (i.e. state, state is an object)
// reducers -  receive the actions and return a  new state

// action type
const ADD = "add";
const ADD2 = "add2";
const ADDUSER = "add new user";

// action - a function that returns an object
const addOne = () => ({
  type: ADD,
});

const addNum = (num) => ({
  type: ADD2,
  payload: num,
});

const newUser = (userInfo) => ({
  type: ADDUSER,
  payload: userInfo,
});

// state saved in store
let initialState = {
  count: 0,
  users: [],
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return { count: state.count + 1 };
    case ADD2:
      return { count: state.count + action.payload };
    case ADDUSER:
      // let users = [...state.users];
      // users.push(action.payload);
      return { ...state, users: [...state.users, action.payload] };
    default:
      return state;
  }

  // if(action.type === ADD)
  //   return { count: state.count + 1 };
  // else {
  //   return state
  // }
};

// store
let store = createStore(reducer);

// not used in React, just using it to show the state in the store
store.subscribe(() => console.log(store.getState()));

// dispatching an action
console.log("dispatch action that doesn't exist");
store.dispatch({
  type:
    "actions that don't exist will hit the default in the switch of the reducer",
});

// dispatch again
console.log("dispatch action to increase by 1");
store.dispatch(addOne());

// dispatch again
console.log("dispatch action to increase by 5");
store.dispatch(addNum(5));

// dispatch again
console.log("dispatch action to add user");
store.dispatch(
  newUser({
    name: "Juan",
    email: "j@j.com",
  })
);

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

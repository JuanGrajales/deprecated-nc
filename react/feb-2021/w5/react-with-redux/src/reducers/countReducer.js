import * as ActionTypes from "../actions/actionTypes";

let initialState = 0;

export const countReducer = (state = initialState, action) => {
  console.log(`reducer uses switch to return the new state of count`);
  switch (action.type) {
    case ActionTypes.ADD:
      return state + 1;
    case ActionTypes.ADD2:
      return state + action.payload;
    default:
      return state;
  }
};

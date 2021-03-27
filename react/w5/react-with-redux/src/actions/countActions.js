import * as ActionTypes from "./actionTypes";

export const addOne = () => (dispatch) => {
  console.log(`dispatch add to count action`);
  dispatch(addAction());
};

export const addFive = (num) => (dispatch) => {
  console.log(`dispatch add to count action`);
  dispatch(addAction2(num));
};

export const addAction = () => ({
  type: ActionTypes.ADD,
});

export const addAction2 = (num) => ({
  type: ActionTypes.ADD2,
  payload: num,
});

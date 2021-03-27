import { combineReducers } from "redux";
import { countReducer } from "./countReducer";

// the property name of the reducers will become the property names of the state in the store
export default combineReducers({
  count: countReducer,
});

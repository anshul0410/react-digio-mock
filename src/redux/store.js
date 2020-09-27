import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import Reducers from "./reducers.js";

const reducer = combineReducers({
  currentUser: Reducers.currentUser,

});

export default function configureStore(initialState) {
  return createStore(
    reducer,
    initialState,
    applyMiddleware(thunkMiddleware)
  );
}

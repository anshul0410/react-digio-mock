import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import Reducers from "./reducers.js";

const reducer = combineReducers({
    currentState: Reducers.currentState,

});

export default function configureStore(initialState) {
  return createStore(
    reducer,
    initialState,
    applyMiddleware(thunkMiddleware)
  );
}

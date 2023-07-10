import { createStore, applyMiddleware, combineReducers } from "redux";
import countReducer from "./reducers/count";
import personReduce from "./reducers/person";
import thunk from "redux-thunk";

const allReducers = combineReducers({
  he: countReducer,
  rens: personReduce,
});

export default createStore(allReducers, applyMiddleware(thunk));

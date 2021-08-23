import { createStore, combineReducers } from "redux";
import measureReducer from "../reducers/measures";
import userReducer from "../reducers/user";

const rootReducer = combineReducers({
  userStore: userReducer,
  measureStore: measureReducer,
});
const store = createStore(rootReducer);

export default store;

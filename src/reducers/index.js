import { combineReducers } from "redux";
import postReducer from "./post";
const rootReducer = combineReducers({
  postList: postReducer,
});

export default rootReducer;

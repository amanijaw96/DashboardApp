import { combineReducers } from "redux";
import user from "./Reducer/userReducer";
import UserData from "./Reducer/userDataReaducer";

export default combineReducers({
  user,
  UserData
});

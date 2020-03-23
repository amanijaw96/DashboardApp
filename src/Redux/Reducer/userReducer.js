import { UserActions } from "../../assets/Constants";
export default function reducer(
  state = {
    loggedin: false
  },
  action
) {
  switch (action.type) {
    case UserActions["AUTHENTICATE-USER"]: {
      return {
        ...state,
        loggedin: action.payload.loggedin
      };
    }
    case UserActions["UNAUTHENTICATE-USER"]: {
      return {
        ...state,
        loggedin: action.payload.loggedin
      };
    }
    default:
      return state;
  }
}

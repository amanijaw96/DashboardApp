import { UserActions, ProfileInfo } from "../../assets/Constants";

export default function reducer(
  state = {
    loggedin: false,
    ...ProfileInfo
  },
  action
) {
  switch (action.type) {
    case UserActions["AUTHENTICATE-USER"]: {
      return {
        ...state,
        loggedin: action.payload.loggedin,
        Name: action.payload.Name,
        userName: action.payload.userName,
        Role: action.payload.Role,
        phone: action.payload.phone
      };
    }
    case UserActions["UNAUTHENTICATE-USER"]: {
      return {
        ...state,
        loggedin: action.payload.loggedin
      };
    }
    case UserActions["UPDATE_PROFILE"]: {
      return {
        ...state,
        Name: action.payload.Name,
        userName: action.payload.userName,
        Role: action.payload.Role,
        phone: action.payload.phone
      };
    }
    default:
      return state;
  }
}

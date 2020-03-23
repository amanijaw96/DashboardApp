import { UserActions } from "../../assets/Constants";

export function authUser() {
  return {
    type: UserActions["AUTHENTICATE-USER"],
    payload: {
      loggedin: true
    }
  };
}
export function unauthUser() {
  return {
    type: UserActions["UNAUTHENTICATE-USER"],
    payload: {
      loggedin: false
    }
  };
}

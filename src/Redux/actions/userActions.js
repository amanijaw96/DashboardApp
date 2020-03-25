import { UserActions, ProfileInfo } from "../../assets/Constants";

export function authUser() {
  return {
    type: UserActions["AUTHENTICATE-USER"],
    payload: {
      loggedin: true,
      ...ProfileInfo
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

export function UpdateProfile(Name, userName, Role, phone) {
  return {
    type: UserActions["UPDATE_PROFILE"],
    payload: {
      Name: Name,
      userName: userName,
      Role: Role,
      phone: phone
    }
  };
}

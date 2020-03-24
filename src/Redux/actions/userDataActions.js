import { UserDataActions } from "../../assets/Constants";

export function updateUserData(data) {
  return {
    type: UserDataActions["UPDATE_USERS"],
    payload: {
      data: data
    }
  };
}

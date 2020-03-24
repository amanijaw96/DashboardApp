import { UserDataActions, UserData } from "../../assets/Constants";
export default function reducer(
  state = {
    data: UserData
  },
  action
) {
  switch (action.type) {
    case UserDataActions["UPDATE_USERS"]: {
      return {
        ...state,
        data: action.payload.data
      };
    }
    default:
      return state;
  }
}

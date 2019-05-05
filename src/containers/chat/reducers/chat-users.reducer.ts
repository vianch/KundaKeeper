import { chatActionTypes } from "../actions/chat.types";

const chatUsersReducer = (state: Users[] = [], action: ReduxState): Users[] => {
  switch (action.type) {
    case chatActionTypes.USER_LIST:
      return action.users;
    default:
      return state;
  }
};

export { chatUsersReducer };

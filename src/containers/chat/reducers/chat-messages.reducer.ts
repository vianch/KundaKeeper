import { chatActionTypes } from "../actions/chat.types";

const chatMessagesReducer = (
  state: Messages[] = [],
  action: ReduxChatState,
): Messages[] => {
  switch (action.type) {
    case chatActionTypes.ADD_MESSAGE:
    case chatActionTypes.MESSAGE_RECEIVED:
      return [
        {
          date: action.date,
          id: action.id,
          message: action.message,
          user: action.user,
        },
        ...state,
      ];
    default:
      return state;
  }
};

export { chatMessagesReducer };

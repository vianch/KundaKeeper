import { chatActionTypes } from "./chat.types";

class ChatActions {
  public static addMessage(
    date: Date,
    message: string,
    user: string,
    messageId: string,
  ): ReduxChatState {
    return {
      date,
      id: messageId,
      message,
      type: chatActionTypes.ADD_MESSAGE,
      user,
    };
  }

  public static messageReceived(
    date: Date,
    message: string,
    user: string,
    messageId: string,
  ): ReduxChatState {
    return {
      date,
      id: messageId,
      message,
      type: chatActionTypes.MESSAGE_RECEIVED,
      user,
    };
  }

  public static populateUserListe(usersData: Users[]): ReduxState {
    return {
      type: chatActionTypes.USER_LIST,
      users: usersData,
    };
  }
}

export { ChatActions };

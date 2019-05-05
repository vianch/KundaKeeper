interface Users {
  userName: string;
  completeName: string;
  status: string;
}

interface Messages {
  message: string;
  user: string;
  id: string;
  date: Date;
}

interface ChatProps {
  dispatchMessage?: (
    date: Date,
    message: string,
    user: string,
    messageId: string,
  ) => ReduxChatState;
  messages?: Messages[];
}

interface ChatSendMessagesProps {
  dispatch?: (date: Date, message: string, user: string, id: string) => void;
  setFormClasses?: ({
    disableSendButton,
    sentButtonType,
  }: {
    disableSendButton: string;
    sentButtonType: string;
  }) => void;
  formClasses?: {
    disableSendButton: string;
    sentButtonType: string;
  };
}

interface WindowInterface extends Window {
  webkitSpeechRecognition: any;
}

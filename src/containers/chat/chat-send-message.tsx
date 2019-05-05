import PropTypes from "prop-types";
import React, {
  ChangeEvent,
  KeyboardEvent,
  ReactElement,
  useEffect,
} from "react";
import openSocket from "socket.io-client";

import { globalConfig } from "../../shared/config/global.config";
import avatarStyles from "../../styles/components/avatar.scss";
import componentStyles from "../../styles/components/box-card.scss";
import styles from "./chat.scss";

const socket = openSocket(globalConfig.HOST, { forceNew: true });
let input: HTMLInputElement;
let isRecording = false;
let noteContent = "";

const ChatSendMessagesComponent = (
  props: ChatSendMessagesProps,
): ReactElement => {
  const {
    webkitSpeechRecognition,
  }: WindowInterface = window as WindowInterface;
  const recognition = new webkitSpeechRecognition();
  const onChangeEvent = (event: ChangeEvent<HTMLInputElement>): void => {
    props.setFormClasses({
      disableSendButton:
        event.target.value.length === 0
          ? styles.sendButtonDisabled
          : styles.sendButtonActive,
      sentButtonType: event.target.value.length === 0 ? "mic" : "send",
    });
  };
  const onKeyPressEvent = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === "Enter" || event.charCode === 13) {
      sendMessage();
    }
  };
  const sendMessage = () => {
    if (props.formClasses.sentButtonType === "mic") {
      sendMicMessage();
    } else {
      sendChatMessage();
    }
  };
  const sendChatMessage = () => {
    if (input.value.length > 0) {
      dispatchMessage(input.value, "Me");
      input.value = "";
      input.focus();
      props.setFormClasses({
        disableSendButton: styles.sendButtonDisabled,
        sentButtonType: "mic",
      });
    }
  };
  const sendMicMessage = () => {
    isRecording = !isRecording;
    if (!isRecording) {
      recognition.start();
    } else {
      recognition.stop();
    }

    recognition.onstart = () => {
      recognition.recognizing = true;
    };

    recognition.onresult = (event: {
      results: any[][];
      resultIndex: number;
    }) => {
      const current = event.results.length - 1;
      noteContent += event.results[current][0].transcript;
    };

    recognition.onspeechend = () => {
      setTimeout(() => {
        if (noteContent.length > 0) {
          dispatchMessage(noteContent, "Me");
          noteContent = "";
        }
      }, 800);
    };
  };
  const botMessage = () => {
    socket.on(
      "chat_message_response",
      (message: string): void => {
        setTimeout(() => {
          dispatchMessage(message, "BOT");
        }, 1200);
      },
    );
  };
  const dispatchMessage = (message: string, user: string) => {
    props.dispatch(
      new Date(),
      message,
      user,
      Math.random()
        .toString(36)
        .substring(7),
    );

    if (user === "Me") {
      socket.emit("chat_message", message);
    }
  };

  useEffect(
    () => {
      socket.emit("greetings", "Bienvenido a KundaKeeper!");
      botMessage();
    },
    [] as ReadonlyArray<any>,
  );

  recognition.lang = "es-CO";
  recognition.continuous = true;
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  return (
    <footer className={`${styles.footerBoxCard} ${componentStyles.boxCard}`}>
      <figure
        className={`${styles.avatarFooter} ${avatarStyles.avatar} ${
          avatarStyles.avatarContainerSmall
        }`}
      >
        <img
          src="https://media.licdn.com/dms/image/C5103AQFgahLA9_pHdg/profile-displayphoto-shrink_800_800/0?e=1562803200&v=beta&t=xtzf1-Pehj5t4AxnN4aXmm1hPShCcFGKqQzHmBhc_U0"
          alt="avatar"
          className={avatarStyles.userAvatar}
        />
      </figure>

      <div className={styles.inputArea}>
        <input
          id="textInput"
          className={styles.copyableText}
          spellCheck={true}
          onChange={onChangeEvent}
          onKeyPress={onKeyPressEvent}
          type={"text"}
          placeholder="Type a message..."
          ref={(node: HTMLInputElement) => {
            input = node;
          }}
        />
      </div>

      <div className={styles.sendButton}>
        <i
          onClick={sendMessage}
          className={`material-icons ${props.formClasses.disableSendButton}`}
        >
          {props.formClasses.sentButtonType}
        </i>
      </div>
    </footer>
  );
};

ChatSendMessagesComponent.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export { ChatSendMessagesComponent };

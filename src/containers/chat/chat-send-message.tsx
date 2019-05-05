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

const ChatSendMessagesComponent = (
  props: ChatSendMessagesProps,
): ReactElement => {
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
      props.dispatch(
        new Date(),
        input.value,
        "Me",
        Math.random()
          .toString(36)
          .substring(7),
      );
      socket.emit("chat_message", input.value);
      input.value = "";
      input.focus();
      props.setFormClasses({
        disableSendButton: styles.sendButtonDisabled,
        sentButtonType: "mic",
      });
    }
  };
  const sendMicMessage = () => {
    let noteContent = "";
    const {
      webkitSpeechRecognition,
    }: WindowInterface = window as WindowInterface;
    const recognition = new webkitSpeechRecognition();

    recognition.lang = "es-CO";
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.start();

    recognition.onstart = () => {
      recognition.recognizing = true;
    };

    recognition.onresult = (event: { results: any[][] }) => {
      const last = event.results.length - 1;
      const transcript = event.results[last][0].transcript;

      if (transcript) {
        noteContent += transcript;
      }
    };

    setTimeout(() => {
      input = document.getElementById("textInput") as HTMLInputElement;
      input.value = noteContent;
      recognition.stop();
      sendChatMessage();
    }, 3000);
  };
  const botMessage = () => {
    socket.on(
      "chat_message_response",
      (message: string): void => {
        setTimeout(() => {
          props.dispatch(
            new Date(),
            message,
            "BOT",
            Math.random()
              .toString(36)
              .substring(7),
          );
        }, 1200);
      },
    );
  };

  useEffect(
    () => {
      socket.emit("greetings", "Bienvenido a Minka Pagos!");
      botMessage();
    },
    [] as ReadonlyArray<any>,
  );

  return (
    <footer className={`${styles.footerBoxCard} ${componentStyles.boxCard}`}>
      <figure
        className={`${styles.avatarFooter} ${avatarStyles.avatar} ${
          avatarStyles.avatarContainerSmall
        }`}
      >
        <img
          src="https://images.pexels.com/photos/247885/pexels-photo-247885.jpeg?h=350&auto=compress&cs=tinysrgb"
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

import React, { ChangeEvent, ReactElement, useState } from "react";

import avatarStyles from "../../styles/components/avatar.scss";
import componentStyles from "../../styles/components/box-card.scss";
import styles from "./chat.scss";

const ChatSendMessagesComponent = (): ReactElement => {
  const [message, setMessage] = useState("");
  const [formClasses, setFormClasses] = useState({
    disableSendButton: styles.sendButtonDisabled,
  });
  const onChangeEvent = (event: ChangeEvent<HTMLInputElement>): void => {
    setMessage(event.target.value);
    setFormClasses({
      disableSendButton:
        event.target.value.length === 0
          ? styles.sendButtonDisabled
          : styles.sendButtonActive,
    });
  };

  return (
    <footer className={`${styles.footerBoxCard} ${componentStyles.boxCard}`}>
      <figure
        className={`${avatarStyles.avatar} ${
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
          className={styles.copyableText}
          spellCheck={true}
          value={message}
          onChange={onChangeEvent}
          type={"text"}
          placeholder="Type a message..."
        />
      </div>

      <div className={styles.sendButton}>
        <i className={`material-icons ${formClasses.disableSendButton}`}>
          send
        </i>
      </div>
    </footer>
  );
};

export { ChatSendMessagesComponent };

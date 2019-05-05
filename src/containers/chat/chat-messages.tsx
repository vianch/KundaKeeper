import PropTypes from "prop-types";
import React, { ReactElement } from "react";

import avatarStyles from "../../styles/components/avatar.scss";
import { userTypes } from "./actions/chat.types";
import styles from "./chat.scss";

const ChatMessagesComponent = ({
  messages,
}: {
  messages: Messages[];
}): ReactElement => (
  <div className={styles.messagesContainer}>
    <div className={styles.messagesList}>
      {messages.map((message: Messages) => {
        if (message.user === userTypes.BOT) {
          return (
            <div
              key={`${message.id}`}
              className={`${styles.message} ${styles.responseMessage}`}
            >
              <figure
                className={`${styles.avatarPosition} ${avatarStyles.avatar} ${
                  avatarStyles.avatarContainerSmall
                }`}
              >
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/kundalini-agent.appspot.com/o/minkalogo.jpg?alt=media&token=907b1a91-b400-496f-b9cb-bd9ce58afe2d"
                  alt="avatar"
                  className={avatarStyles.userAvatar}
                />
              </figure>

              <span>{message.message}</span>
              <div className={styles.timeStamp}>
                {message.date.toDateString()}
              </div>
            </div>
          );
        } else {
          return (
            <div
              key={`${message.id}`}
              className={`${styles.message} ${styles.userMessage}`}
            >
              <span>{message.message}</span>
              <div className={styles.timeStamp}>
                {message.date.toDateString()}
              </div>
            </div>
          );
        }
      })}
    </div>
  </div>
);

ChatMessagesComponent.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export { ChatMessagesComponent };

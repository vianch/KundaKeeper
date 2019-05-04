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
                  src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb"
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

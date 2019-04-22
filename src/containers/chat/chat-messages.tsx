import React, { ReactElement } from "react";

import avatarStyles from "../../styles/components/avatar.scss";
import styles from "./chat.scss";

const ChatMessagesComponent = (): ReactElement => (
  <div className={styles.messagesContainer}>
    <div className={styles.messagesList}>
      <div className={`${styles.message} ${styles.userMessage}`}>
        <span>Mensaje 122</span>

        <div className={styles.timeStamp}>10:10 AM, Today</div>
      </div>

      <div className={`${styles.message} ${styles.responseMessage}`}>
        <figure
          className={`${styles.avatarPosition} ${avatarStyles.avatar} ${
            avatarStyles.avatarContainerSmall
          }`}
        >
          <img
            src="https://images.pexels.com/photos/247885/pexels-photo-247885.jpeg?h=350&auto=compress&cs=tinysrgb"
            alt="avatar"
            className={avatarStyles.userAvatar}
          />
        </figure>

        <span>Response from bot...</span>

        <div className={styles.timeStamp}>10:10 AM, Today</div>
      </div>
    </div>
  </div>
);

export { ChatMessagesComponent };

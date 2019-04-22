import React, { ReactElement } from "react";

import avatarStyles from "../../styles/components/avatar.scss";
import componentStyles from "../../styles/components/box-card.scss";
import styles from "./chat.scss";

const ChatHeaderComponent = (): ReactElement => (
  <header className={`${styles.ChatBoxCard} ${componentStyles.boxCard}`}>
    <figure
      className={`${avatarStyles.avatar} ${avatarStyles.avatarContainerSmall}`}
    >
      <img
        src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb"
        alt="avatar"
        className={avatarStyles.userAvatar}
      />
    </figure>

    <h4 className={styles.userName}>Minka pay</h4>
  </header>
);

export { ChatHeaderComponent };

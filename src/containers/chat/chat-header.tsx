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
        src="https://firebasestorage.googleapis.com/v0/b/kundalini-agent.appspot.com/o/minkalogo.jpg?alt=media&token=907b1a91-b400-496f-b9cb-bd9ce58afe2d"
        alt="avatar"
        className={avatarStyles.userAvatar}
      />
    </figure>

    <h4 className={styles.userName}>Kunda pay</h4>
  </header>
);

export { ChatHeaderComponent };

import React, { ReactElement } from "react";

import stylesUsers from "../../components/users/users.scss";
import componentStyles from "../../styles/components/box-card.scss";
import responsiveStyles from "../../styles/layout/_responsive.scss";
import styles from "./chat.scss";

import { UsersComponent } from "../../components/users/users";
import { Wrapper } from "../../hoc/wrapper";
import { ChatHeaderComponent } from "./chat-header";
import { ChatMessagesComponent } from "./chat-messages";
import { ChatSendMessagesComponent } from "./chat-send-message";

const ChatContainer = (): ReactElement => {
  return (
    <Wrapper>
      <div className={responsiveStyles.container}>
        <UsersComponent />

        <div
          className={`${responsiveStyles["column-9"]} ${styles.chatContainer}`}
        >
          <ChatHeaderComponent />
          <ChatMessagesComponent />
          <ChatSendMessagesComponent />
        </div>
      </div>
    </Wrapper>
  );
};

export { ChatContainer };

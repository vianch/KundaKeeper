import React, { ComponentType, ReactElement, useState } from "react";
import { connect } from "react-redux";

import responsiveStyles from "../../styles/layout/_responsive.scss";
import styles from "./chat.scss";

import { UsersComponent } from "../../components/users/users";
import { Wrapper } from "../../hoc/wrapper";
import { ChatActions } from "./actions/chat.actions";
import { ChatHeaderComponent } from "./chat-header";
import { ChatMessagesComponent } from "./chat-messages";
import { ChatSendMessagesComponent } from "./chat-send-message";

const ChatContainer = ({
  dispatchMessage,
  messages,
}: ChatProps): ReactElement => {
  const [formClasses, setFormClasses] = useState({
    disableSendButton: styles.sendButtonDisabled,
  });

  return (
    <Wrapper>
      <div className={responsiveStyles.container}>
        <UsersComponent />

        <div
          className={`${responsiveStyles["column-9"]} ${styles.chatContainer}`}
        >
          <ChatHeaderComponent />
          <ChatMessagesComponent messages={messages} />
          <ChatSendMessagesComponent
            dispatch={dispatchMessage}
            formClasses={formClasses}
            setFormClasses={setFormClasses}
          />
        </div>
      </div>
    </Wrapper>
  );
};

const mapDispatchToProps = {
  dispatchMessage: ChatActions.addMessage,
};

function maptStateToProps(state: {
  chatMessagesReducer: Messages[];
  chatUsersReducer: Users[];
}): ChatProps {
  return { messages: state.chatMessagesReducer };
}

export default connect<{}, {}, ChatProps>(
  maptStateToProps,
  mapDispatchToProps,
)(ChatContainer as ComponentType<ChatProps>);

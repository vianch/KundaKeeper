import React, { Component, ReactNode } from "react";

import { Wrapper } from "../hoc/wrapper";
import { ChatContainer } from "./chat/chat";

export class App extends Component<{}, {}> {
  public render(): ReactNode {
    return (
      <Wrapper>
        <ChatContainer />
      </Wrapper>
    );
  }
}

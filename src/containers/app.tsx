import React, { Component, ReactNode } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Wrapper } from "../hoc/wrapper";
import ChatContainer from "./chat/chat";
import WalletContainer from "./wallet/wallet";

export class App extends Component<{}, {}> {
  public render(): ReactNode {
    return (
      <Router>
        <Wrapper>
          <Route exact path="/" component={WalletContainer} />
          <Route path="/chat" component={ChatContainer} />
        </Wrapper>
      </Router>
    );
  }
}

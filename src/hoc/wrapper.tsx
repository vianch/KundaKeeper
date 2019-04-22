import React, { Component, ReactNode } from "react";

class Wrapper extends Component<{ children: ReactNode }> {
  public render(): ReactNode {
    const myProps = { ...this.props };
    if (myProps.children) {
      return myProps.children;
    }
  }
}
export { Wrapper };

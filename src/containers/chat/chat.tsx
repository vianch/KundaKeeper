import React, { ReactElement } from "react";

import responsiveStyles from "../../styles/layout/_responsive.scss";

import { UserComponent } from "../../components/users/users";
import { Wrapper } from "../../hoc/wrapper";

const ChatContainer = (): ReactElement => {
  return (
    <Wrapper>
      <div className={responsiveStyles.container}>
        <UserComponent />
      </div>
    </Wrapper>
  );
};

export { ChatContainer };

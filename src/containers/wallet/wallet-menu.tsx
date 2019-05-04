import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

import responsiveStyles from "../../styles/layout/_responsive.scss";
import styles from "./wallet.scss";

const WalletMenuComponent = (): ReactElement => (
  <div className={`${styles.menuContainer} ${responsiveStyles["column-3"]}`}>
    <Link to="/Chat">Chat</Link>
  </div>
);

export { WalletMenuComponent };

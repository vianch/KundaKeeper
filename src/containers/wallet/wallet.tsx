import React, { ComponentType } from "react";
import { connect } from "react-redux";

import { Wrapper } from "../../hoc/wrapper";
import responsiveStyles from "../../styles/layout/_responsive.scss";
import { WalletActions } from "./actions/wallet.actions";
import { CurrencyListComponent } from "./currency-list";
import { WalletMenuComponent } from "./wallet-menu";
import styles from "./wallet.scss";

const WalletContainer = () => {
  return (
    <Wrapper>
      <div
        className={`${responsiveStyles.container} ${styles.walletContainer}`}
      >
        <WalletMenuComponent />
        <CurrencyListComponent />
      </div>
    </Wrapper>
  );
};

const mapDispatchToProps = {
  dispatchBuyCurrency: WalletActions.buyCurrency,
  dispatchLoadCurrencyList: WalletActions.loadCurrencies,
  dispatchPayWithCurrency: WalletActions.payWithCurrency,
  dispatchSendCurrency: WalletActions.sendCurrency,
};

function mapStateToProps(state: {
  currencyListReducer: CurrencyState[];
  currencyReducer: CurrencyState;
}): WalletProps {
  return {
    currencyList: state.currencyListReducer,
  };
}

export default connect<{}, {}, WalletProps>(
  mapStateToProps,
  mapDispatchToProps,
)(WalletContainer as ComponentType<WalletProps>);

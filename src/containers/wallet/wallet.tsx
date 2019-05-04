import React, { ComponentType, ReactElement, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { Wrapper } from "../../hoc/wrapper";
import boxCardStyles from "../../styles/components/box-card.scss";
import responsiveStyles from "../../styles/layout/_responsive.scss";
import { WalletActions } from "./actions/wallet.actions";
import styles from "./wallet.scss";

const WalletContainer = () => {
  return (
    <Wrapper>
      <div
        className={`${responsiveStyles.container} ${styles.walletContainer}`}
      >
        <div
          className={`${styles.menuContainer} ${responsiveStyles["column-3"]}`}
        >
          MENY
        </div>

        <div
          className={`${responsiveStyles["column-9"]} ${
            styles.walletListContainer
          }`}
        >
          <div className={styles.walletList}>
            <div className={`${boxCardStyles.card} ${boxCardStyles.cardBlue}`}>
              <div className="image-logo" />
              <div className="criptocurrency-information">
                <h1>BitCoin</h1>
              </div>
              <div className="crito-currency-amount">
                <span>$0</span>
              </div>
            </div>

            <div className={`${boxCardStyles.card} ${boxCardStyles.cardPink}`}>
              sda
            </div>
          </div>
        </div>
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

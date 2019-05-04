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
          <Link to="/Chat">Chat</Link>
        </div>

        <div
          className={`${responsiveStyles["column-9"]} ${
            styles.walletListContainer
          }`}
        >
          <div className={styles.walletList}>
            <div
              className={`${boxCardStyles.card} ${boxCardStyles.cardBlue} ${
                styles.walletItem
              }`}
            >
              <div className={styles.currencyLogoContainer}>
                <img
                  className={styles.currencyImage}
                  src="https://firebasestorage.googleapis.com/v0/b/vianch-web.appspot.com/o/bitcoin.png?alt=media&token=4e19a03f-0a11-4eb8-a276-74a7d1a33800"
                />
              </div>

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

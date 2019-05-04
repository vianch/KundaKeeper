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
          asd
        </div>
        <div
          className={`${responsiveStyles["column-9"]} ${
            styles.walletListContainer
          }`}
        >
          <div className={`${boxCardStyles.card} ${boxCardStyles.cardGreen}`}>
            sda
          </div>

          <div className={`${boxCardStyles.card} ${boxCardStyles.cardOrange}`}>
            sda
          </div>

          <div className={`${boxCardStyles.card} ${boxCardStyles.cardBlue}`}>
            sda
          </div>

          <div className={`${boxCardStyles.card} ${boxCardStyles.cardPink}`}>
            sda
          </div>

          <div
            className={`${boxCardStyles.card} ${boxCardStyles.cardDarkBlue}`}
          >
            sda
          </div>

          <div className={`${boxCardStyles.card} ${boxCardStyles.cardRed}`}>
            sda
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

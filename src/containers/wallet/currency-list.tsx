import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

import boxCardStyles from "../../styles/components/box-card.scss";
import buttonStyles from "../../styles/components/buttons.scss";
import responsiveStyles from "../../styles/layout/_responsive.scss";
import styles from "./wallet.scss";

const CurrencyListComponent = (): ReactElement => (
  <div
    className={`${responsiveStyles["column-12"]} ${styles.walletListContainer}`}
  >
    <div className={styles.walletTitle}>
      <h1> KundaWallet</h1>
    </div>

    <div className={`${styles.walletAdvice}`}>
      <h2 className={styles.adviceHeader}>Try our new transaction chat</h2>

      <p className={styles.adviceDescription}>
        Our new transaction system via written chat and voice chat allows you to
        work with the wallet more comfortably, now you can talk to our system to
        make your transactions
      </p>

      <Link
        to="/chat"
        className={`${buttonStyles.button} ${buttonStyles.btnActive} ${
          styles.adviceButton
        }`}
      >
        Enter chat
      </Link>
    </div>

    <div className={styles.walletList}>
      <div
        className={`${boxCardStyles.card} ${boxCardStyles.cardBlue} ${
          styles.walletItem
        }`}
      >
        <div className={styles.currencyLogoContainer}>
          <img
            className={styles.currencyImage}
            src="https://firebasestorage.googleapis.com/v0/b/vianch-web.appspot.com/o/bitcoin.png?alt=media&token=14951888-3416-4a8e-a78b-7b2902bb8df6"
          />
        </div>

        <div className={styles.currencyInformation}>
          <h1>BitCoin</h1>
          <p>$213 Per BIT</p>
        </div>

        <div className={styles.currencyAmount}>
          <span>$0</span>
          <span>0 bit</span>
        </div>
      </div>

      <div
        className={`${boxCardStyles.card} ${boxCardStyles.cardBlue} ${
          styles.walletItem
        }`}
      >
        <div className={styles.currencyLogoContainer}>
          <img
            className={styles.currencyImage}
            src="https://firebasestorage.googleapis.com/v0/b/vianch-web.appspot.com/o/ethreum.png?alt=media&token=31294412-3e86-4b76-8a61-523a27f7c1bf"
          />
        </div>

        <div className={styles.currencyInformation}>
          <h1>Ethereum</h1>
          <p>$210.0 per ETH</p>
        </div>

        <div className={styles.currencyAmount}>
          <span>$0</span>
          <span>0 ETH</span>
        </div>
      </div>

      <div className={`${boxCardStyles.card} ${boxCardStyles.cardPink}`}>
        <div className={styles.currencyLogoContainer}>
          <img
            className={styles.currencyImage}
            src="https://firebasestorage.googleapis.com/v0/b/vianch-web.appspot.com/o/kudalini.png?alt=media&token=ced53ed1-891b-454f-9cd3-a36b6209eb35"
          />
        </div>

        <div className={styles.currencyInformation}>
          <h1>Kundacoin</h1>
          <p>$210.0 per KDC</p>
        </div>

        <div className={styles.currencyAmount}>
          <span>$0</span>
          <span>0 KDC</span>
        </div>
      </div>
    </div>
  </div>
);

export { CurrencyListComponent };

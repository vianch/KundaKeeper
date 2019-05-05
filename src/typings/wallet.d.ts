interface WalletProps {
  dispatchBuyCurrency?: () => WalletState;
  dispatchLoadCurrencyList?: () => WalletState;
  dispatchPayWithCurrency?: () => WalletState;
  dispatchSendCurrency?: () => WalletState;
  currencyList?: CurrencyState[];
}

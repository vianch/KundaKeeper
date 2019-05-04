import { walletActionTypes } from "../actions/wallet-action.types";

const currencyReducer = (
  state: CurrencyState = {},
  action: WalletState,
): CurrencyState => {
  switch (action.type) {
    case walletActionTypes.BUY_CURRENCY:
    case walletActionTypes.SEND_CURRENCY:
    case walletActionTypes.LOAD_CURRENCIES:
      return {
        ...state,
        amount: action.currency.amount,
        currencyType: action.currency.currencyType,
        date: action.currency.date,
      };
    default:
      return state;
  }
};

const currencyListReducer = (
  state: CurrencyState[] = [],
  action: WalletState,
): CurrencyState[] => {
  switch (action.type) {
    case walletActionTypes.LOAD_CURRENCIES:
      return [...state, { currencies: action.currencies }] as CurrencyState[];
    default:
      return state as CurrencyState[];
  }
};

export { currencyReducer, currencyListReducer };

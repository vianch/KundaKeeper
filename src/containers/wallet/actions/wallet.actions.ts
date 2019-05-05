import { walletActionTypes } from "./wallet-action.types";

class WalletActions {
  public static loadCurrencies(currencies: CurrencyState[]): WalletState {
    return {
      currencies,
      type: walletActionTypes.LOAD_CURRENCIES,
    };
  }

  public static buyCurrency(currency: CurrencyState): WalletState {
    return {
      currency,
      type: walletActionTypes.BUY_CURRENCY,
    };
  }

  public static payWithCurrency(currency: CurrencyState): WalletState {
    return {
      currency,
      type: walletActionTypes.PAY_WITH_CURRENCY,
    };
  }

  public static sendCurrency(currency: CurrencyState): WalletState {
    return {
      currency,
      type: walletActionTypes.SEND_CURRENCY,
    };
  }
}

export { WalletActions };

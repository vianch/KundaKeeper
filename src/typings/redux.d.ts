interface ReduxCoreState {
  type: string;
}

interface ReduxState extends ReduxCoreState {
  users?: Users[];
}

interface ReduxChatState extends Messages {
  type: string;
}

interface WalletState extends ReduxCoreState {
  currencies?: CurrencyState[];
  currency?: CurrencyState;
}

interface CurrencyState {
  amount?: number;
  currencyType?: string;
  date?: Date;
}

interface DataStates<T> {
  responseData: T[] | T | any;
  dataFetched: boolean;
  isFetching: boolean;
  error: boolean;
}

interface EventState<T> {
  type: string;
  state?: T;
}

interface ErrorResponse {
  ERROR?: string;
  CODE?: number;
  headers?: any;
  status?: number;
  message?: string;
}

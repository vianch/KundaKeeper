interface ReduxState {
  type: string;
  users?: Users[];
}

interface ReduxChatState extends Messages {
  type: string;
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

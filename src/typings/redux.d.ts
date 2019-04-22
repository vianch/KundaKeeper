interface ReduxState<T> {
  type: string;
  data?: T;
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

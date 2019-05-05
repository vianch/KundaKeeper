interface ServerResponse {
  data: any;
}

interface BuyPostData {
  handle: string;
  amountString: string;
}

interface GetBalanceData {
  handle: string;
}

interface PostPaymentData {
  sourceHandle: string;
  targetHandle: string;
  amountString: string;
}

interface BuyResponse {
  id: string;
  labels: {
    status: string;
  };
}

interface BalanceResponse {
  amount: string;
}

interface PaymentResponse {
  id: string;
  labels: {
    status: string;
  };
}

interface PayPalButtonProps {
  amount?: number | string;
  currency?: number | string;
  onSuccess?: any;
  catchError?: any;
  onError?: any;
  createOrder?: any;
  onApprove?: any;
  style?: object;
  options?: PaypalOptions;
  onButtonReady?: any;
}

interface PayPalButtonState {
  isSdkReady: boolean;
}

interface PaypalOptions {
  clientId?: string;
  merchantId?: string;
  currency?: number | string;
  intent?: string;
  commit?: boolean | string;
  vault?: boolean | string;
  component?: string;
  disableFunding?: string;
  disableCard?: string;
  integrationDate?: string;
  locale?: string;
  buyerCountry?: string;
  debug?: boolean | string;
}

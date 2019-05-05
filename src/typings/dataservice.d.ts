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

import { DataService } from "../../shared/services/data.service";

class ChatService {
  public static buyCoin(postData: BuyPostData): Promise<string> {
    return DataService.postData("/buy", postData);
  }

  public static getBalance(getData: GetBalanceData): Promise<string> {
    return DataService.getData("/balance", getData);
  }

  public static makePayment(postData: PostPaymentData): Promise<string> {
    return DataService.postData("/pay", postData);
  }
}

export { ChatService };

import { DataService } from "../../shared/services/data.service";

class ChatService {
  public static buyCoin(postData: BuyPostData): Promise<string> {
    return DataService.postData("/buy", postData);
  }
}

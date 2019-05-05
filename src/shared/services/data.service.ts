import axios from "axios";

import { globalConfig } from "../config/global.config";

class DataService {
  public static getData(endPoint: string): Promise<any> {
    return axios.get(`http://${globalConfig}${endPoint}`);
  }

  public static postData(endPoint: string, body: object = {}): Promise<any> {
    return axios.post(`http://${globalConfig}${endPoint}`, body);
  }
}

export { DataService };

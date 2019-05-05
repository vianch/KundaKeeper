import axios from "axios";

import { globalConfig } from "../config/global.config";

class DataService {
  public static getData(endPoint: string, body: object = {}): Promise<any> {
    return axios.get(`${endPoint}`, body);
  }

  public static postData(endPoint: string, body: object = {}): Promise<any> {
    return axios.post(`${endPoint}`, body);
  }
}

export { DataService };

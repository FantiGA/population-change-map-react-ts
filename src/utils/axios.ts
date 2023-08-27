/*
 * @Author: fantiga
 * @Date: 2023-08-26 21:18:20
 * @LastEditTime: 2023-08-27 10:47:25
 * @LastEditors: fantiga
 * @FilePath: /population-change-map-react-ts/src/utils/axios.ts
 */

import axios from "axios";

axios.defaults.baseURL = "https://opendata.resas-portal.go.jp/api/v1";
axios.defaults.headers.get["X-API-KEY"] = process.env.RESAS_X_API_KEY;

export default axios;

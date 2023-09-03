/*
 * @Author: fantiga
 * @Date: 2023-08-26 21:18:20
 * @LastEditTime: 2023-09-03 02:01:51
 * @LastEditors: fantiga
 * @FilePath: /population-change-map-react-ts/src/utils/axios.ts
 */

import axios from "axios";

/** API Base URL / APIベースURL / API基本URL */
export const baseURL = "https://opendata.resas-portal.go.jp/api/v1";
axios.defaults.baseURL = baseURL;
/** Get X-API-KEY from environment variable / 環境変数からX-API-KEYを取得 / 从环境变量获取X-API-KEY */
axios.defaults.headers.get["X-API-KEY"] = process.env.RESAS_X_API_KEY;

export default axios;

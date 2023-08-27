/*
 * @Author: fantiga
 * @Date: 2023-08-26 21:18:20
 * @LastEditTime: 2023-08-27 19:58:53
 * @LastEditors: fantiga
 * @FilePath: /population-change-map-react-ts/src/utils/axios.ts
 */

import axios from "axios";

/** API Base URL / APIベースURL / API基本URL */
axios.defaults.baseURL = "https://opendata.resas-portal.go.jp/api/v1";
/** Get X-API-KEY from environment variable / 環境変数からX-API-KEYを取得 / 从环境变量获取X-API-KEY */
axios.defaults.headers.get["X-API-KEY"] = process.env.RESAS_X_API_KEY;

export default axios;

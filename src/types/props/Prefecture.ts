/*
 * @Author: fantiga
 * @Date: 2023-08-26 22:10:54
 * @LastEditTime: 2023-08-27 19:28:17
 * @LastEditors: fantiga
 * @FilePath: /population-change-map-react-ts/src/types/props/Prefecture.ts
 */

import { ChangeEventHandler } from "react";
import { PrefectureResults } from "../results";

/**
 * Prefecture component props type
 * 都道府県コンポーネントのpropsデータ型
 * 都道府县组件Props类型
 */
export interface PrefectureProps {
  prefectureList: PrefectureResults[];
  handlePrefecturesChange: ChangeEventHandler<HTMLInputElement>;
}

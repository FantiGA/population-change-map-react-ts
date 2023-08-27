/*
 * @Author: fantiga
 * @Date: 2023-08-26 22:10:54
 * @LastEditTime: 2023-08-27 12:42:35
 * @LastEditors: fantiga
 * @FilePath: /population-change-map-react-ts/src/types/props/Prefecture.ts
 */

import { ChangeEventHandler } from "react";
import { PrefectureResults } from "../results";

export interface PrefectureProps {
  prefectureList: PrefectureResults[];
  handlePrefecturesChange: ChangeEventHandler<HTMLInputElement>;
}

/*
 * @Author: fantiga
 * @Date: 2023-08-27 13:19:08
 * @LastEditTime: 2023-08-27 19:28:24
 * @LastEditors: fantiga
 * @FilePath: /population-change-map-react-ts/src/types/props/Chart.ts
 */

import { Dispatch, SetStateAction } from "react";
import { PopulationResults } from "../results";

/**
 * Chart component props type
 * チャートコンポーネントのpropsデータ型
 * 图表组件Props类型
 */
export interface ChartProps {
  populationData: PopulationResults[];
  dimension: number;
  setDimension: Dispatch<SetStateAction<number>>;
}

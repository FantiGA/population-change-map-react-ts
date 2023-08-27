/*
 * @Author: fantiga
 * @Date: 2023-08-27 13:19:08
 * @LastEditTime: 2023-08-27 14:03:42
 * @LastEditors: fantiga
 * @FilePath: /population-change-map-react-ts/src/types/props/Chart.ts
 */

import { Dispatch, SetStateAction } from "react";
import { PopulationResults } from "../results";

export interface ChartProps {
  populationData: PopulationResults[];
  dimension: number;
  setDimension: Dispatch<SetStateAction<number>>;
}

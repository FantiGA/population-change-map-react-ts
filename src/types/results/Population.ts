/*
 * @Author: fantiga
 * @Date: 2023-08-27 12:28:21
 * @LastEditTime: 2023-08-27 17:13:29
 * @LastEditors: fantiga
 * @FilePath: /population-change-map-react-ts/src/types/results/Population.ts
 */

export interface YearData {
  year: number,
  value: number,
}

export interface DimensionData {
  label: "総人口" | "年少人口" | "生産年齢人口" | "老年人口",
  data: YearData[],
}

export interface PopulationResults {
  id: number,
  name: string,
  data: DimensionData[];
}
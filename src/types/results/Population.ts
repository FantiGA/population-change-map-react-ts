/*
 * @Author: fantiga
 * @Date: 2023-08-27 12:28:21
 * @LastEditTime: 2023-08-27 19:24:30
 * @LastEditors: fantiga
 * @FilePath: /population-change-map-react-ts/src/types/results/Population.ts
 */

/**
 * Year data type
 * 年のデータ型
 * 年度数据类型
 */
export interface YearData {
  year: number,
  value: number,
}

/**
 * Dimension data type
 * ディメンションのデータ型
 * 维度数据类型
 */
export interface DimensionData {
  label: "総人口" | "年少人口" | "生産年齢人口" | "老年人口",
  data: YearData[],
}

/**
 * Population data type
 * 人口データ型
 * 人口数据类型
 */
export interface PopulationResults {
  id: number,
  name: string,
  data: DimensionData[];
}
/*
 * @Author: fantiga
 * @Date: 2023-08-26 20:18:19
 * @LastEditTime: 2023-08-27 19:56:26
 * @LastEditors: fantiga
 * @FilePath: /population-change-map-react-ts/src/components/Chart.tsx
 */

import { ChartProps } from "@/types";
import Highcharts, { Options, SeriesOptionsType } from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { FC, memo, useMemo } from "react";
import { styled } from "styled-components";

import "@/styles/highcharts.css";

const HighchartsUI = styled.section`
  margin: 1em;
`;

const FormUI = styled.section`
  display: flex;
  justify-content: center;
  margin: 1em 0;
  flex-wrap: wrap;
`;

const LabelUI = styled.label`
  margin: 0 0.5em;
`;

const Chart: FC<ChartProps> = ({ populationData, dimension, setDimension }) => {
  /** Series data / シリーズデータ / 系列数据 */
  const seriesData: SeriesOptionsType[] = [];
  /** categories / カテゴリ / 类别 */
  const categories: string[] = [];

  for (const value of populationData) {
    const tempData: number[] = [];

    /**
     * When the dimension changes, put the data of different dimensions into the series data.
     * ディメンションが変わる場合は、系列データに異なるディメンションのデータを入れる。
     * 当维度变化时，将不同维度的数据放入系列数据里。
     */
    for (const item of value.data[dimension].data) {
      tempData.push(item.value);
      categories.push(item.year.toString());
    }

    seriesData.push({
      type: "line",
      name: value.name,
      data: tempData,
    });
  }

  /**
   * Dynamically generate options configuration
   * オプション構成を動的に生成する
   * 动态生成options配置
   */
  const options: Options = useMemo(() => ({
    title: {
      text: "都道府県別",
    },
    accessibility: {
      enabled: false,
    },
    xAxis: {
      title: {
        text: "年度",
        align: "high",
      },
      categories: categories,
    },
    yAxis: {
      title: {
        text: "人口数",
        align: "high",
      },
      lineWidth: 1,
    },
    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "top"
    },
    chart: {
      styledMode: true,
    },
    series: seriesData.length === 0 ? [{ type: "line", name: "", data: [], }] : seriesData,
  }), [categories, seriesData]);

  return (
    <HighchartsUI>
      <FormUI>
        <LabelUI>
          <input type="radio" name="dataType" value={0} checked={dimension === 0} onChange={(event) => setDimension(Number(event.target.value))} />
          <span>総人口</span>
        </LabelUI>
        <LabelUI>
          <input type="radio" name="dataType" value={1} checked={dimension === 1} onChange={(event) => setDimension(Number(event.target.value))} />
          <span>年少人口</span>
        </LabelUI>
        <LabelUI>
          <input type="radio" name="dataType" value={2} checked={dimension === 2} onChange={(event) => setDimension(Number(event.target.value))} />
          <span>生産年齢人口</span>
        </LabelUI>
        <LabelUI>
          <input type="radio" name="dataType" value={3} checked={dimension === 3} onChange={(event) => setDimension(Number(event.target.value))} />
          <span>老年人口</span>
        </LabelUI>
      </FormUI>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </HighchartsUI>
  );
};

export default memo(Chart);
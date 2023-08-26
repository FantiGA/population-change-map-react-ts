/*
 * @Author: fantiga
 * @Date: 2023-08-26 20:18:19
 * @LastEditTime: 2023-08-27 00:00:36
 * @LastEditors: fantiga
 * @FilePath: /population-change-map-react-ts/src/components/Chart.tsx
 */

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { FC } from "react";
import { styled } from "styled-components";

const HighchartsUI = styled.section`
  margin: 1em;
`;

const options: Highcharts.Options = {
  title: {
    text: '都道府県別'
  },
  xAxis: {
    title: {
      text: "年度",
    },
  },
  yAxis: {
    title: {
      text: "人口数",
    },
  },
  series: [{
    type: "line",
    name: "name",
    data: [1, 2, 3],
  }]
};

const Chart: FC = () => {
  return (
    <HighchartsUI>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </HighchartsUI>
  );
};

export default Chart;
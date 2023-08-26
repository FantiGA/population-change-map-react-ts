/*
 * @Author: fantiga
 * @Date: 2023-08-26 21:16:07
 * @LastEditTime: 2023-08-26 22:22:24
 * @LastEditors: fantiga
 * @FilePath: /population-change-map-react-ts/src/components/Container.tsx
 */

import axios from "@/utils/axios";
import { FC, useEffect, useState } from "react";
import Head from "./Head";
import Chart from "./Chart";
import styled from "styled-components";
import Prefecture from "./Prefecture";
import { PrefectureResults } from "@/types";

const ContainerUI = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container: FC = () => {
  const [prefectures, setPrefectures] = useState<PrefectureResults[]>([]);

  /**
   * Get prefecture data
   * 都道府県データを取得
   * 取得都道府县数据
   */
  useEffect(() => {
    axios
      .get("https://opendata.resas-portal.go.jp/api/v1/prefectures")
      .then(({ data: { result } }) => {
        setPrefectures(result);
      })
      .catch((error) => console.error("Error: " + error));
  }, []);

  return (
    <ContainerUI>
      <Head />
      <Prefecture prefectures={prefectures} />
      <Chart />
    </ContainerUI>
  );
};

export default Container;
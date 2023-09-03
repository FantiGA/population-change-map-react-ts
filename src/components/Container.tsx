/*
 * @Author: fantiga
 * @Date: 2023-08-26 21:16:07
 * @LastEditTime: 2023-09-03 00:50:02
 * @LastEditors: fantiga
 * @FilePath: /population-change-map-react-ts/src/components/Container.tsx
 */

import React, { ChangeEventHandler, FC, useCallback, useEffect, useState } from "react";
import axios from "../utils/axios";
import Head from "./Head";
import Chart from "./Chart";
import styled from "styled-components";
import Prefecture from "./Prefecture";
import { PopulationResults, PrefectureResults } from "../types";

const ContainerUI = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container: FC = () => {
  /** List of prefectures / 都道府県一覧 / 都道府县列表 */
  const [prefectureList, setPrefectureList] = useState<PrefectureResults[]>([]);
  /** Population data / 人口データ / 人口数据 */
  const [populationData, setPopulationData] = useState<PopulationResults[]>([]);
  /** Dimension status / ディメンションのステータス / 维度状态 */
  const [dimension, setDimension] = useState<number>(0);

  /**
   * At the time of prefecture selection
   * 都道府県選択時
   * 都道府县选择时
   * 
   * @type {ChangeEventHandler<HTMLInputElement>}
   */
  const handlePrefecturesChange: ChangeEventHandler<HTMLInputElement> = useCallback(({ target: { value, checked, dataset: { name } } }) => {
    const newData: PopulationResults[] = [...populationData];
    if (checked) {
      /**
       * When selected, the corresponding data is asynchronously obtained from the prefecture code and put into the population data.
       * 選択すると、都道府県コードから該当するデータを非同期に取得し、人口データに組み込みます。
       * 选中时，从都道府县Code异步获取相应数据，并放入人口数据。
       */
      axios
        .get("/population/composition/perYear", { params: { prefCode: value } })
        .then(({ data: { result: { data } } }) => {
          newData.push({
            id: Number(value),
            name: name ?? "",
            data,
          });
          setPopulationData(newData);
        })
        .catch((error) => console.error("Error: " + error));
    } else {
      /**
       * When unchecked, the data of the prefecture code is deleted from the population data.
       * チェックを外すと、人口データから都道府県コードのデータが削除されます。
       * 非选中时，从人口数据中删除该都道府县Code的数据。
       */
      newData.splice(newData.findIndex(obj => obj.id === Number(value)), 1);
      setPopulationData(newData);
    };
  }, [populationData]);

  /**
   * Initial display, asynchronously fetches the prefecture list data.
   * 初期表示、都道府県一覧データを非同期で取得します。
   * 初始显示，异步获取都道府县列表数据。
   */
  useEffect(() => {
    axios
      .get("/prefectures")
      .then(({ data: { result } }) => {
        setPrefectureList(result);
      })
      .catch((error) => console.error("Error: " + error));
  }, []);

  return (
    <ContainerUI>
      <Head />
      <Prefecture
        prefectureList={prefectureList}
        handlePrefecturesChange={handlePrefecturesChange}
      />
      <Chart
        populationData={populationData}
        dimension={dimension}
        setDimension={setDimension}
      />
    </ContainerUI>
  );
};

export default Container;
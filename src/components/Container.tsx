/*
 * @Author: fantiga
 * @Date: 2023-08-26 21:16:07
 * @LastEditTime: 2023-08-27 17:54:33
 * @LastEditors: fantiga
 * @FilePath: /population-change-map-react-ts/src/components/Container.tsx
 */

import axios from "@/utils/axios";
import { ChangeEventHandler, FC, useCallback, useEffect, useState } from "react";
import Head from "./Head";
import Chart from "./Chart";
import styled from "styled-components";
import Prefecture from "./Prefecture";
import { PopulationResults, PrefectureResults } from "@/types";

const ContainerUI = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container: FC = () => {
  const [prefectureList, setPrefectureList] = useState<PrefectureResults[]>([]);
  const [populationData, setPopulationData] = useState<PopulationResults[]>([]);
  const [dimension, setDimension] = useState<number>(0);

  const handlePrefecturesChange: ChangeEventHandler<HTMLInputElement> = useCallback(({ target: { value, checked, dataset: { name } } }) => {
    const newData: PopulationResults[] = [...populationData];
    if (checked) {
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
      newData.splice(newData.findIndex(obj => obj.id === Number(value)), 1);
      setPopulationData(newData);
    };
  }, [populationData]);

  /**
   * Get prefecture data
   * 都道府県データを取得
   * 取得都道府县数据
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
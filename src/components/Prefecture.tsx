/*
 * @Author: fantiga
 * @Date: 2023-08-26 22:06:24
 * @LastEditTime: 2023-08-26 23:59:26
 * @LastEditors: fantiga
 * @FilePath: /population-change-map-react-ts/src/components/Prefecture.tsx
 */

import { PrefectureProps } from "@/types";
import { FC } from "react";
import { styled } from "styled-components";

const TitleUI = styled.h2`
  font-size: 1.2em;
  color: #252525;
  display: inline-block;
  width: 4em;
  margin: 1em;
  padding: 2px 5px;
  border: 1px solid #252525;
  border-radius: 5px;
`;

const FormUI = styled.section`
  display: flex;
  justify-content:flex-start;
  padding: 0 1em;
  flex-wrap: wrap;
  align-items: flex-start;
`;

const LabelUI = styled.label`
  width: 5.5em;
`;

const Prefecture: FC<PrefectureProps> = ({ prefectures }) => {
  return (
    <>
      <TitleUI>都道府県</TitleUI>
      <FormUI>
        {
          prefectures.map((value, index) => (
            <LabelUI key={index}><input type="checkbox" name="prefectures" value={value.prefCode}></input><span>{value.prefName}</span></LabelUI>
          ))
        }
      </FormUI>
    </>
  );
};

export default Prefecture;
/*
 * @Author: fantiga
 * @Date: 2023-08-26 22:06:24
 * @LastEditTime: 2023-09-03 16:46:04
 * @LastEditors: fantiga
 * @FilePath: /population-change-map-react-ts/src/components/Prefecture.tsx
 */

import React, { FC, memo } from "react";
import { PrefectureProps } from "../types";
import { styled } from "styled-components";

const TitleUI = styled.h2`
  font-size: 1.2em;
  text-align: center;
  color: #252525;
  display: inline-block;
  width: 4.5em;
  margin: 1em;
  padding: 2px 5px;
  border: 1px solid #252525;
  border-radius: 5px;

  @media (prefers-color-scheme: dark) {
    color: rgba(255, 255, 255, .6);
    border: 1px solid #ffffff;
  }
`;

const FormUI = styled.section`
  display: flex;
  justify-content: flex-start;
  padding: 0 1em;
  flex-wrap: wrap;
  align-items: flex-start;
`;

const LabelUI = styled.label`
  width: 5.5em;
`;

const Prefecture: FC<PrefectureProps> = ({ prefectureList, handlePrefecturesChange }) => (
  <>
    <TitleUI>都道府県</TitleUI>
    <FormUI>
      {
        prefectureList && prefectureList.map((value, index) => (
          <LabelUI key={index}>
            <input
              type="checkbox"
              name="prefectures"
              value={value.prefCode}
              data-name={value.prefName}
              onChange={handlePrefecturesChange}
            />
            <span>{value.prefName}</span>
          </LabelUI>
        ))
      }
    </FormUI>
  </>
);

export default memo(Prefecture);
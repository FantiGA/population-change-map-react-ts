/*
 * @Author: fantiga
 * @Date: 2023-08-26 19:29:31
 * @LastEditTime: 2023-08-26 21:05:33
 * @LastEditors: fantiga
 * @FilePath: /population-change-map-react-ts/src/components/Head.tsx
 */

import { FC } from "react";
import styled from "styled-components";

const HeadUI = styled.h1`
  flex: 1;
  width: auto;
  margin: 0;
  padding: 1em 0;
  font-size: 1.5em;
  text-align: center;
  color: #252525;
  border-bottom: 1px solid #252525;
`;

const Head: FC = () => <HeadUI>総人口推移グラフ</HeadUI>;

export default Head;
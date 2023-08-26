/*
 * @Author: fantiga
 * @Date: 2023-08-26 18:44:59
 * @LastEditTime: 2023-08-26 19:49:43
 * @LastEditors: fantiga
 * @FilePath: /population-change-map-react-ts/src/App.tsx
 */

import React from "react";
import { FC } from "react";
import Head from "@/components/Head";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
`;

const App: FC = () => (
  <React.StrictMode>
    <Container>
      <Head />
    </Container>
  </React.StrictMode>
);

export default App;

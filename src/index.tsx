/*
 * @Author: fantiga
 * @Date: 2023-08-26 18:38:38
 * @LastEditTime: 2023-09-03 00:50:38
 * @LastEditors: fantiga
 * @FilePath: /population-change-map-react-ts/src/index.tsx
 */

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import "./styles/index.css";

const container: HTMLElement = document.getElementById("root") || document.createElement("div");
const root = createRoot(container);
root.render(<App />);

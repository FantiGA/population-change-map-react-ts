/*
 * @Author: fantiga
 * @Date: 2023-08-26 18:38:38
 * @LastEditTime: 2023-08-27 19:18:18
 * @LastEditors: fantiga
 * @FilePath: /population-change-map-react-ts/src/index.tsx
 */

import { createRoot } from "react-dom/client";
import App from "./App";

import "@/styles/index.css";

const container: HTMLElement = document.getElementById("root") || document.createElement("div");
const root = createRoot(container);
root.render(<App />);

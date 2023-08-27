/*
 * @Author: fantiga
 * @Date: 2023-08-26 18:38:38
 * @LastEditTime: 2023-08-27 18:09:26
 * @LastEditors: fantiga
 * @FilePath: /population-change-map-react-ts/src/index.tsx
 */

import { createRoot } from 'react-dom/client';
import App from './App';

import "@/styles/index.css";

/**
 * React 18 新写法
 */
const container: HTMLElement = document.getElementById('root') || document.createElement('div');
// 创建一个root。
const root = createRoot(container);
// 初始渲染：将一个元素渲染到root。
root.render(<App />);

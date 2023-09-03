# population-change-map-react-ts

[English](README.md) | [日本語](README.ja.md) | **简体中文**

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

- [population-change-map-react-ts](#population-change-map-react-ts)
  - [用法](#用法)
  - [架构](#架构)
  - [策略](#策略)
  - [维护者](#维护者)
  - [许可证](#许可证)

欢迎。

这是一个使用 `React`、`styled-components`、`Highcharts` 和 `jest`，根据 `RESAS API`，实现显示都道府县总人口变化图的SPA演示项目。

## 用法

要运行此项目，请使用 `npm` 在本地安装它：

```bash
cd ./population-change-map-react-ts
npm i
npm run start
```

然后就可以访问 `http://localhost:8080/` 了。

[演示](https://fantiga.github.io/population-change-map-react-ts/dist/)

## 架构

  - 主要的 JavaScript 框架是 [React 18.2](https://reactjs.org/) 版本。
  - 使用 [styled-components 6.0.7](https://styled-components.com/) 来进行样式的管理。
  - 使用 [Highcharts 11.1.0](https://www.highcharts.com/) 来进行图表的绘制展示。
  - 使用 [Webpack 5.88.2](https://webpack.js.org/) 进行代码和资源打包。
  - 使用 [Jest 29.6.4](https://jestjs.io/) 进行测试。
  - 遵循 [TypeScript](https://www.typescriptlang.org/) 和 [ESLint](https://eslint.org/) 的类型检查和语法规范。
  - 适配桌面端和移动端的显示。（响应式设计）

## 策略

  1. 所有项目都在 `/src` 目录下。
  2. `/src/index.tsx` 是入口文件。
  3. `/src/utils/` 目录放入了公共的部分。`axios.ts` 包含了用到的一些常量和异步获取数据的方法。
  4. 为了安全，`RESAS_X_API_KEY` 的值需要事先设置 Node 的环境变量，从而进行获取。
  5. `/src/components/` 目录下是页面中的 `Chart`、`Container`、`Head` 和 `Prefecture` 组件。
  6. `Container` 组件用于页面整体的容器。
  7. `Head` 组件是页面头部。
  8. `Prefecture` 组件用于都道府县列表的显示和选择。
  9. `Chart` 组件用于切换数据维度，以及选中的都道府县详细信息的图表展示。
  10. 通过指定的方式和 URL 向 API 发送请求。将返回的数据根据要求渲染页面。
  11. 100% 的测试通过率。
  12. 累计花费时间：约 `18.5` 小时。

## 维护者

[@FantiGA](https://github.com/FantiGA)

## 许可证

[MIT](LICENSE)  © 2023 [@FantiGA](https://github.com/FantiGA)

# population-change-map-react-ts

**English** | [日本語](README.ja.md) | [简体中文](README.zh-CN.md)

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

- [population-change-map-react-ts](#population-change-map-react-ts)
  - [Usage](#usage)
  - [Architecture](#architecture)
  - [Strategies](#strategies)
  - [Maintainers](#maintainers)
  - [License](#license)

Welcome.

This is a demo that uses `React`, `styled-components`, `Highcharts` and `jest`, according to the `RESAS API`, a SPA demo project that displays a chart of changes in the total population of prefectures is implemented.

## Usage

To run this project, install it locally using `npm`:

```bash
cd ./population-change-map-react-ts
npm i
npm run start
```

Then you can visit `http://localhost:8080/`.

[Demo](https://fantiga.github.io/population-change-map-react-ts/dist/)

## Architecture

  - The main JavaScript framework is [React 18.2](https://reactjs.org/) version.
  - Use [styled-components 6.0.7](https://styled-components.com/) for style management.
  - Use [Highcharts 11.1.0](https://www.highcharts.com/) to draw and display charts.
  - Use [Webpack 5.88.2](https://webpack.js.org/) for code and resource packaging.
  - Tested using [Jest 29.6.4](https://jestjs.io/).
  - It follows the type checking and syntax specifications of [TypeScript](https://www.typescriptlang.org/) and [ESLint](https://eslint.org/).
  - Adapt to desktop and mobile display. (Responsive web design)

## Strategies

 1. All projects are in the `/src` directory.
 2. `/src/index.tsx` is an entry file.
 3. The `/src/utils/` directory puts the public section. `axios.ts` contains some constants used and methods for asynchronously obtaining data.
 4. For security reasons, the value of `RESAS_X_API_KEY` needs to be set in Node's environment variable in advance to obtain it.
 5. Under the `/src/components/` directory are the `Chart`, `Container`, `Head` and `Prefecture` components in the page.
 6. The `Container` component is used for the overall container of the page.
 7. The `Head` component is the page header.
 8. The `Prefecture` component is used for display and selection of prefecture lists.
 9. The `Chart` component is used to switch the data dimension and display the detailed information of the selected prefecture.
 10. Sends a request to the API via the specified method and URL. Render the page with the returned data as requested.
 11. The test pass rate is 100%.
 12. Cumulative time spent: about `18.5` hours.

## Maintainers

[@FantiGA](https://github.com/FantiGA)

## License

[MIT](LICENSE)  © 2023 [@FantiGA](https://github.com/FantiGA)

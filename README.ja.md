# population-change-map-react-ts

[English](README.md) | **日本語** | [简体中文](README.zh-CN.md)

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

- [population-change-map-react-ts](#population-change-map-react-ts)
  - [使用法](#使用法)
  - [フレームワーク](#フレームワーク)
  - [ストラテジー](#ストラテジー)
  - [メンテナ](#メンテナ)
  - [ライセンス](#ライセンス)

ようこそ。

`React`、`styled-components`、`Highcharts`、`jest`　を利用し、`RESAS API` をベースに都道府県別の総人口推移グラフを表示するSPA実証プロジェクトです。

## 使用法

このプロジェクトを実行するには、 `npm` を​​使用してローカルにインストールします。

```bash
cd ./population-change-map-react-ts
npm i
npm run start
```

次に、`http://localhost:8080/` にアクセスします。

[デモ](https://fantiga.github.io/population-change-map-react-ts/dist/)

## フレームワーク

  - 主要なのJavaScriptフレームワークは[React 18.2](https://reactjs.org/)版となります。
  - スタイル管理には [styled-components 6.0.7](https://styled-components.com/) を使用します。
  - グラフの描画と表示には、[Highcharts 11.1.0](https://www.highcharts.com/)を使用します。
  - コードとリソースのパッケージ化には [Webpack 5.88.2](https://webpack.js.org/) を使用します。
  - [Jest 29.6.4](https://jestjs.io/)を使用してテストされました。
  - [TypeScript](https://www.typescriptlang.org/) および [ESLint](https://eslint.org/) の型チェックおよび構文仕様に従います。
  - PC/スマートフォン表示に対応します。 (レスポンシブWebデザイン)

## ストラテジー

  1. すべてのプロジェクトは `/src` ディレクトリにあります。
  2. `/src/index.tsx` はエントリファイルです。
  3. `/src/utils/` に共通部分を配置します。 `axios.ts` には、使用されるいくつかの定数と、データを非同期で取得するためのメソッドが含まれています。
  4. セキュリティの為、`RESAS_X_API_KEY` の値を取得するには、事前にノードの環境変数に設定する必要があります。
  5. `/src/components/` ディレクトリの下には、ページ内の `Chart`、`Container`、`Head`、および `Prefecture` コンポーネントがあります。
  6. `Container` コンポーネントは、ページのコンテナ全体に使用されます。
  7. `Head` コンポーネントはページヘッダーです。
  8. `Prefecture` コンポーネントは、都道府県リストの表示と選択に使用されます。
  9. `Chart` コンポーネントは、データの次元を切り替えて、選択した都道府県の詳細情報を表示するために使用されます。
  10. 指定されたメソッドと URL を介して API にリクエストを送信します。要求どおりに返されたデータを使用してページを表示します。
  11. テストの合格率は 100% です。
  12. 累積費やした時間: 約 `18.5` 時間。

## メンテナ

[@FantiGA](https://github.com/FantiGA)

## ライセンス

[MIT](LICENSE)  © 2023 [@FantiGA](https://github.com/FantiGA)

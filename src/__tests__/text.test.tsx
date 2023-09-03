import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "@jest/globals";
import "@testing-library/jest-dom/jest-globals";
import Prefecture from "../components/Prefecture";
import Chart from "../components/Chart";
import App from "../App";

describe("text tests", () => {
  test("render text when App shows", () => {
    // Given
    const result = /総人口推移グラフ/;

    // When
    render(<App />);

    // Then
    expect(screen.getByText(result)).toBeInTheDocument();
  });

  test("render text when Prefecture shows", () => {
    // Given
    const result = /都道府県/;

    // When
    render(
      <Prefecture
        prefectureList={[]}
        handlePrefecturesChange={jest.fn()}
      />
    );

    // Then
    expect(screen.getByText(result)).toBeInTheDocument();
  });

  test("render text when Chart shows", () => {
    // Given
    const result1 = /都道府県別/;
    const result2 = /年度/;
    const result3 = /人口数/;
    const result4 = /総人口/;
    const result5 = /年少人口/;
    const result6 = /生産年齢人口/;
    const result7 = /老年人口/;

    // When
    render(<Chart
      populationData={[]}
      dimension={0}
      setDimension={jest.fn()}
    />);

    // Then
    expect(screen.getByText(result1)).toBeInTheDocument();
    expect(screen.getByText(result2)).toBeInTheDocument();
    expect(screen.getByText(result3)).toBeInTheDocument();
    expect(screen.getByText(result4)).toBeInTheDocument();
    expect(screen.getByText(result5)).toBeInTheDocument();
    expect(screen.getByText(result6)).toBeInTheDocument();
    expect(screen.getByText(result7)).toBeInTheDocument();
  });
});

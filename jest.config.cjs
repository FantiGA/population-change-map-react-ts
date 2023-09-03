module.exports = {
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/dist/", "/node_modules/", "/public/"],
  collectCoverageFrom: [
    "src/**/*.ts(x)?",
    "!src/**/index.ts",
  ],
  modulePaths: ["<rootDir>/src/"],
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest"
  },
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
    "^.+\\.(css)$": "<rootDir>/.jest/CSSStub.js"
  }
};
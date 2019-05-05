module.exports = {
  roots: ["<rootDir>/src"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|tsx|js|jsx)$",
  transform: {
    ".*.tsx?$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    ".(css|jpg|png)$": "<rootDir>/empty-module.js",
  },
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/index.tsx"],
};

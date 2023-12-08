const baseDir = "<rootDir>/src";
const baseTestDir = "<rootDir>/src/test";
const config = {
  testEnvironment: "node",
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [`${baseDir}/**/*.js`],
  testMatch: [`${baseTestDir}/**/*.js`],
};
module.export = config;

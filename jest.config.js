const baseDir = "<rootDir>/src";
const baseTestDir = "<rootDir>/tests";
const config = {
  testEnvironment: "node",
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [`${baseDir}/**/*.js`],
  testMatch: [`${baseTestDir}/**/*.js`],
  detectOpenHandles: true,
};
module.exports = config;

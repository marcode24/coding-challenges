module.exports = {
  testEnvironment: 'node',
  maxWorkers: 1,
  verbose: true,
  coverageThreshold: {
    global: {
      branches: 85,
      functions: 85,
      lines: 85,
      statements: 85,
    },
  },
};

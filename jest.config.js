module.exports = {
    transform: {
       "\\.(ts|tsx)$": "ts-jest"
    },
    testMatch: ["**/*.test.ts", "**/*.spec.ts"],
    clearMocks: true,
    resetModules: true,
    testEnvironment: "node",
    setupFilesAfterEnv: ["<rootDir>/src/index.ts"],
    coverageThreshold: {
      global: {
        branches: 100,
        functions: 100,
        lines: 100,
        statements: 100
      }
    },
    globals: {
      "ts-jest": {
        isolatedModules: true
      }
  }
};
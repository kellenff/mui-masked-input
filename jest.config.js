module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  rootDir: '.',
  setupFilesAfterEnv: [
    '<rootDir>/src/test-setup.ts',
  ],
};

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  rootDir: '.',
  setupFilesAfterEnv: [
    '<rootDir>/test-setup.ts',
  ],
};

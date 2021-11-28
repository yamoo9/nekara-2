export default {
  testEnvironment: 'jsdom',
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
  setupFilesAfterEnv: ['./.testSetup.mjs'],
  testPathIgnorePatterns: ['/node_modules/'],
};

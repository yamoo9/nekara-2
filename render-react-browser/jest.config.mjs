export default {
  testEnvironment: 'jsdom',
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
  setupFilesAfterEnv: ['./jestSetup.js'],
  testPathIgnorePatterns: ['/node_modules/'],
};

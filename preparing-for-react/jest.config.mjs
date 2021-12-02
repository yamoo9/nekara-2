/*
 * Jest 구성 참고
 * https://jestjs.io/docs/configuration
 */

export default {
  // 모든 테스트 환경에서 사용할 수 있어야 하는 전역 변수 집합
  globals: {},

  // 모듈이 사용하는 파일 확장자 배열
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],

  // 각 테스트 전에 테스트 프레임워크를 구성하거나 설정하기 위해 일부 코드를 실행하는 모듈의 경로 목록
  setupFilesAfterEnv: ['./jest.setup.js'],

  // 테스트에 사용할 테스트 환경
  testEnvironment: 'jsdom',

  // Jest가 테스트 파일을 감지하는 데 사용하는 glob 패턴
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],

  // 모든 테스트 경로에 대해 일치하는 정규 표현식 패턴 문자열의 배열, 일치하는 테스트 제외
  testPathIgnorePatterns: ['/node_modules/'],

  // 정규 표현식에서 컴파일러 경로까지의 맵
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },

  // 모든 소스 파일 경로와 일치하는 정규 표현식 패턴 문자열의 배열, 일치하는 파일은 컴파일 제외
  transformIgnorePatterns: ['/node_modules/', '\\.pnp\\.[^\\/]+$'],
};

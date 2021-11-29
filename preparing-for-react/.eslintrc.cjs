module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    // 'jest/globals': true
  },
  // [ESLint 글로벌 설정]
  //  ESLint는 실행 환경에 존재하는 전역 변수에 대해 가정하지 않습니다.
  //  사용 가능한 전역 변수에 대한 지식이 필요한 규칙을 사용하려면 구성 파일에서 전역 변수를 정의하거나 소스 코드의 구성 주석을 사용하면 됩니다.
  //  참고: https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
  globals: {
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'plugin:jest-dom/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
    jest: {
      version: require('jest/package.json').version,
    },
  },
  plugins: ['react', 'jest', 'jest-dom'],
  rules: {
    'no-unused-vars': 'warn',
    'no-console': 'off',
    'jest/no-commented-out-tests': 'off',
    'jest/expect-expect': 'off',
  },
};

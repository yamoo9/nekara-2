module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  globals: {
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended',
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
  plugins: ['react', 'jest'],
  rules: {
    'no-unused-vars': 'warn',
    'react/prop-types': 'off',
  },
};

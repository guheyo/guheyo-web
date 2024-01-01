const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'prettier',
    'next/core-web-vitals',
    'plugin:react/recommended',
    'plugin:storybook/recommended',
  ],
  plugins: ['react', '@typescript-eslint', 'prettier', 'check-file'],
  rules: {
    'react/react-in-jsx-scope': OFF,
    'react/require-default-props': OFF,
    'react/jsx-pascal-case': ERROR,
    'prettier/prettier': ERROR,
    'import/prefer-default-export': OFF,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'no-nested-ternary': OFF,
    'no-ternary': OFF,
    'no-unneeded-ternary': WARNING,
    'no-param-reassign': [ERROR, { props: false }],
    'no-use-before-define': OFF,
    'no-unused-vars': OFF,
    'no-underscore-dangle': OFF,
    '@typescript-eslint/no-use-before-define': ERROR,
    '@typescript-eslint/no-unused-vars': [ERROR, { args: 'none' }],
    '@typescript-eslint/naming-convention': [
      ERROR,
      {
        selector: 'default',
        format: ['camelCase'],
      },
      {
        selector: 'import',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE'],
      },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'objectLiteralProperty',
        format: null,
      },
      {
        selector: 'property',
        format: null,
      },
      {
        selector: 'parameter',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
      },
    ],
    'check-file/filename-naming-convention': [
      ERROR,
      {
        '**/*.{jsx,tsx}': 'KEBAB_CASE',
        '**/*.{js,ts}': 'KEBAB_CASE',
      },
      {
        ignoreMiddleExtensions: true,
      },
    ],
    'check-file/folder-naming-convention': [
      ERROR,
      {
        '*/**/': 'NEXT_JS_APP_ROUTER_CASE',
      },
    ],
    'react/jsx-props-no-spreading': OFF,
    'no-bitwise': OFF,
  },
};

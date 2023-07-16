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
  plugins: ['react', '@typescript-eslint', 'prettier', 'unicorn'],
  rules: {
    'react/react-in-jsx-scope': OFF,
    'react/require-default-props': OFF,
    'react/jsx-pascal-case': ERROR,
    'prettier/prettier': ERROR,
    'import/prefer-default-export': OFF,
    'no-nested-ternary': OFF,
    'no-ternary': OFF,
    'no-unneeded-ternary': WARNING,
    'no-param-reassign': [ERROR, { props: false }],
    'no-use-before-define': OFF,
    'no-unused-vars': OFF,
    '@typescript-eslint/no-use-before-define': ERROR,
    '@typescript-eslint/no-unused-vars': [ERROR, { args: 'none' }],
    '@typescript-eslint/naming-convention': [
      ERROR,
      {
        selector: 'default',
        format: ['camelCase'],
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
    ],
  },
  overrides: [
    {
      files: ['*.jsx', '*.tsx'],
      rules: {
        'unicorn/filename-case': [
          ERROR,
          {
            case: 'kebabCase',
          },
        ],
      },
    },
    {
      files: ['*.js', '*.ts'],
      rules: {
        'unicorn/filename-case': [
          ERROR,
          {
            cases: {
              camelCase: true,
              kebabCase: true,
            },
          },
        ],
      },
    },
  ],
};

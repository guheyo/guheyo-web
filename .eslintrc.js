const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'parser': '@typescript-eslint/parser',
    'extends': [
        'airbnb',
        'airbnb/hooks',
        'airbnb-typescript',
        'prettier',
        'next/core-web-vitals',
        'plugin:storybook/recommended'
    ],
    'overrides': [
        {
            'env': {
                'node': true
            },
            'files': [
                '.eslintrc.{js,cjs}'
            ],
            'parserOptions': {
                'sourceType': 'script'
            }
        }
    ],
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module',
        'project': ['./tsconfig.json']
    },
    'plugins': [
        'react',
        '@typescript-eslint'
    ],
    'rules': {
        'react/react-in-jsx-scope': OFF,
        'react/require-default-props': OFF,
        'react/jsx-pascal-case': ERROR,
        'import/prefer-default-export': OFF,
        'no-use-before-define': OFF,
        'no-nested-ternary': OFF,
        'no-param-reassign': ["error", { "props": false }],
        'no-unused-vars': OFF,
        '@typescript-eslint/no-unused-vars': [ERROR, {args: 'none'}],
        '@typescript-eslint/naming-convention': [
            'error',
            {
                'selector': 'default',
                'format': ['camelCase']

            },
            {
                'selector': 'typeLike',
                'format': ['PascalCase']
            },
            {
                'selector': 'variable',
                'format': ['camelCase', 'UPPER_CASE']
            },
            {
                'selector': 'function',
                'format': ['camelCase', 'PascalCase']
            },
            {
                'selector': 'objectLiteralProperty',
                'format': null
            },
        ]
    }
}

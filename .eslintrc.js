module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "parser": "@typescript-eslint/parser",
    "extends": [
        "airbnb",
        "airbnb/hooks",
        "airbnb-typescript",
        "prettier",
        "next/core-web-vitals",
        "plugin:storybook/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": ["./tsconfig.json"]
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
    }
}

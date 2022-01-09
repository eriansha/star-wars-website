module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true
  },
  plugins: ['@typescript-eslint', 'simple-import-sort', 'unused-imports'],
  extends: [
    'eslint:recommended',
    'next',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  rules: {
    'object-curly-spacing': [2, 'always'],
    'no-unused-vars': 'off',
    'no-console': 'warn',
    quotes: ['error', 'single'],
    'comma-dangle': ['warn', 'never'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    'react/display-name': 'off',

    //#region  //*=========== Unused Import ===========
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_'
      }
    ],
    //#endregion  //*======== Unused Import ===========

    //#region  //*=========== Import Sort ===========
    'simple-import-sort/exports': 'warn',
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          // ext library & side effect imports
          ['^@?\\w', '^\\u0000'],
          // {s}css files
          ['^.+\\.s?css$'],
          // components
          ['^@/atoms', '^@/molecules', '^@/organisms'],
          // Other imports
          ['^@/'],
          // relative paths up until 3 level
          [
            '^\\./?$',
            '^\\.(?!/?$)',
            '^\\.\\./?$',
            '^\\.\\.(?!/?$)',
            '^\\.\\./\\.\\./?$',
            '^\\.\\./\\.\\.(?!/?$)',
            '^\\.\\./\\.\\./\\.\\./?$',
            '^\\.\\./\\.\\./\\.\\.(?!/?$)'
          ],
          ['^@/types'],
          // other that didnt fit in
          ['^']
        ]
      }
    ]
    //#endregion  //*======== Import Sort ===========
  },
  globals: {
    React: true,
    JSX: true
  }
}

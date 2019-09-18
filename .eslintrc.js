module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'arca',
    'react',
    'react-hooks',
    '@typescript-eslint',
  ],
  rules: {
    'import-spacing': 0,
    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
    'jsx-quotes': ['error', 'prefer-double'],
    'arca/import-align': [1, {collapseExtraSpaces: false}],
    'react/jsx-first-prop-new-line': [1, 'never'],
    'react/jsx-filename-extension': [2, {'extensions': ['.jsx', '.tsx']}],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off',
    'react/jsx-indent-props': [1, 'first'],
    'no-multi-spaces': [
      'error',
      {
        exceptions: {
          'ImportDeclaration': true,
          'VariableDeclarator': true,
          'AssignmentExpression': true,
          'EnumValue': true
        }
      }
    ],
  },
  overrides: [
    {
      files: ["**/*.test.ts", "**/*.test.tsx"],
      rules: {
        'no-undef': 0,
        'import/no-extraneous-dependencies': 0,
      }
    },
    {
      files: "dist/**/*",
      rules: {},
    }
  ],
  settings: {
    'import/resolver': {
      'node': {
        'extensions': ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  }
};

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true
    }
  },
  env: {
    es6: true,
    node: true,
  },
  rules: {
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'object-curly-spacing': ['error', 'always'],
    'no-trailing-spaces': 'error',
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always',
    }],
    'comma-dangle': ['error', 'always-multiline'],
    'no-mixed-spaces-and-tabs': 'error',
  }
}

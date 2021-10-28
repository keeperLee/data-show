module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console':  'off',
    'no-debugger':  'off',
    'indent': 'off',
    'no-irregular-whitespace' : 'off',
    'space-before-function-paren': 'off',
    'semi': 'off'
  }
}

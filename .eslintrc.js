module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/prettier'],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-undef': 'off',
    'no-shadow': 'off',
    'no-param-reassign': ['error', { props: false }],
    'linebreak-style': ['error', 'windows'],
    'object-curly-newline': 'off',
    'global-require': 'off',
    'func-names': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};

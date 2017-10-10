// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  extends: 'airbnb-base',
  globals: {
    describe: true,
    it: true,
    expect: true,
  },
  rules: {
    'import/extensions': ['error', 'always', { 'js': 'never' }],
    'prefer-arrow-callback': 'warn',
    'func-names': ['warn', 'as-needed'],
  }
}


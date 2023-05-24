let eslintConfigTypeScript = require('@azat-io/eslint-config-typescript')

module.exports = [
  ...eslintConfigTypeScript,
  {
    settings: {
      'import/core-modules': ['vscode'],
    },
  },
]

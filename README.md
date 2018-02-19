# @cto.ai/eslint-config-base

## Installation

`yarn add @cto.ai/eslint-config-base`

## Usage

Your .eslintrc.js can extend this, ie.
```
{
  extends: '@cto.ai/base'
}
```

## Overriding settings

You can override settings on a per-project basis. If you find a setting you think should be changed for all projects please make a pull request to [https://github.com/hackcapital/eslint](https://github.com/hackcapital/eslint)

Example `.eslintrc.js` with overridden settings:
```
module.exports = {
  extends: "@cto.ai/base",
  rules: {
    'linebreak-style': 'off', // disabled for docker on windows
  },
}

```
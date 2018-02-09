/**
 * .eslintrc.js
 * https://eslint.org/docs/user-guide/configuring
 *
 * Why do I need a linter?
 *   http://www.sublimelinter.com/en/latest/about.html#why-do-i-need-a-linter
 *
 * How do I disable linting for a line?
 *   Add a comment: // eslint-disable-line
 */

module.exports = {
  extends: "airbnb-base",
  parser: "babel-eslint",
  env: {
    es6: true, // this automatically sets the ecmaVersion parser option to 6
    browser: true,
    node: true,
    mocha: true,
  },
  globals: {
    before: false,
    describe: false,
    it: false,
  },
  plugins: [
    'import',
  ],
  rules: {
    // Overly restrictive
    "arrow-body-style": "off",

    // JS seems to be moving away from export default as a best-practice
    "import/prefer-default-export": "off",

    // Overly restrictive
    "no-param-reassign": "off",

    // Little advantage
    "no-plusplus": "off",

    // Overly restrictive
    "no-underscore-dangle": "off",

    // Object destructuring = mandatory
    // Array destructuring = optional
    "prefer-destructuring": ["error", {"object": true, "array": false}],

    // Overly restrictive
    "class-methods-use-this": "off",

    // Overly restrictive
    "consistent-return": "off",

    // Adds friction to debugging
    "no-console": "off",

    // Disagree with convention
    "padded-blocks": "off",

    // Advantage arguably doesn't outweigh the costs
    "func-names": ["off", "as-needed"],

    // Un-used arguments can help remind us of function signatures
    "no-unused-vars": ["error", { "args": "none" }]
  }
}

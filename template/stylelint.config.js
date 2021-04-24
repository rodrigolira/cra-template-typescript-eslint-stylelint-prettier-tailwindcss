module.exports = {
  extends: ['stylelint-prettier/recommended'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen'],
      },
    ],
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null,
    'color-no-invalid-hex': true,
    'max-empty-lines': 2,
    'declaration-colon-space-after': 'always',
  },
};

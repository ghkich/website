module.exports = {
  processors: ['stylelint-processor-styled-components'],
  extends: ['stylelint-config-standard', 'stylelint-config-styled-components'],
  rules: {
    'no-duplicate-selectors': null,
    'declaration-colon-newline-after': null,
    'selector-type-no-unknown': null
  }
}

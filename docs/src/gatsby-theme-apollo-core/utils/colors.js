const { colors } = require('@apollo/space-kit/colors')
const wpgqlColors = require('../../utils/colors')

exports.colors = {
  primary: wpgqlColors.primary,
  primaryLight: wpgqlColors.primaryLight,
  secondary: colors.pink.dark,
  tertiary: colors.teal.dark,
  divider: colors.silver.dark,
  background: colors.silver.light,
  background2: colors.silver.base,
  text1: colors.black.lighter,
  text2: colors.grey.dark,
  text3: colors.grey.light,
  text4: colors.silver.darker,
  warning: colors.yellow.base,
  shadow: colors.black.darker,
  highlight: colors.blue.base,
  highlight2: colors.blue.lighter,
  highlight3: colors.blue.lightest,
  hoverOpacity: 0.8,
}

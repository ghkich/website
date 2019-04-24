const ColorTransformer = require('color')

const mixColors = (color1, color2) => {
  const mixedColor = ColorTransformer(color1)
    .mix(ColorTransformer(color2), 0.5)
    .hex()
  return mixedColor
}

const bio = '#9a6ad9'
const pro = '#786cd7'
const cad = '#479cd8'
const lif = '#3ccf73'
const hob = '#a3de50'
const plus = '#cae04e'

const biopro = mixColors(bio, pro)
const procad = mixColors(pro, cad)
const procadpro = mixColors(procad, pro)
const procadcad = mixColors(procad, cad)
const cadlif = mixColors(cad, lif)
const cadlifcad = mixColors(cadlif, cad)
const cadliflif = mixColors(cadlif, lif)
const lifhob = mixColors(lif, hob)
const lifhoblif = mixColors(lifhob, lif)
const lifhobhob = mixColors(lifhob, hob)
const hobplus = mixColors(hob, plus)

module.exports = {
  bio,
  pro,
  cad,
  lif,
  hob,
  plus,
  biopro,
  procad,
  procadpro,
  procadcad,
  cadlifcad,
  cadlif,
  cadliflif,
  lifhoblif,
  lifhob,
  lifhobhob,
  hobplus,

  white: '#fff',
  gray100: '#f8f9f9',
  gray200: '#f7f8f8',
  gray300: '#d2d8da',
  gray400: '#c1cacd',
  gray600: '#b3bec1',
  gray700: '#99a6ab',
  gray800: '#73858c',
  gray900: '#5b696f',
  black: '#000',

  none: 'transparent'
}

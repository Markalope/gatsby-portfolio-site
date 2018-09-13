import Typography from "typography"

const typography = new Typography(
  {
    baseFontSize: "16px",
  baseLineHeight: 1.45,
  headerFontFamily: [
    "Dosis",
    "sans-serif",
  ],
  bodyFontFamily: ["Dosis", "serif"],
  googleFonts: [
  {
    name: 'Dosis',
    styles: [
      '400',
      '600'
    ],
  }
],

})

export default typography
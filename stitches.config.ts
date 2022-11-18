import { createStitches } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      black100: '#383838',
      black500: '#343434',
      gray100: '#F9F9F9',
      gray500: '#5F5F5F',
    }
  }
})

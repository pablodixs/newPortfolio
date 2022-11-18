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
      gray100: '#F9F9F9',
      gray500: '#5F5F5F',

      text: '#343434',
      heading: '#272727',

      backgroundAlt: '#F9F9F9',
      background: '#fefefd',
      border: 'rgba(0,0,0, 0.03)',
    }
  }
})

export const darkTheme = createTheme({
  colors: {
    background: '#181818',
    backgroundAlt: '#202020',

    border: '#272727',

    heading: '#F8F8F8',
    text: '#bbbbbb',
  }
})
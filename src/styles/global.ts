import { globalCss, styled } from '../../stitches.config'

export const globalStyles = globalCss({
  '@font-face': [
    {
      fontFamily: 'Averta',
      fontWeight: 400,
      src: `url("/fonts/Averta-Regular.woff2")`,
    },
    {
      fontFamily: 'Averta',
      fontWeight: 600,
      src: `url("/fonts/Averta-SemiBold.woff2")`,
    },
    {
      fontFamily: 'Averta',
      fontWeight: 700,
      src: `url("/fonts/Averta-Bold.woff2")`,
    },
    {
      fontFamily: 'Averta',
      fontWeight: 800,
      src: `url("/fonts/Averta-Black.woff2")`,
    },
    {
      fontFamily: 'Moranga',
      fontWeight: 700,
      src: `url("/fonts/Moranga-Bold.otf")`,
    },
    {
      fontFamily: 'Moranga',
      fontWeight: 800,
      src: `url("/fonts/Moranga-Black.otf")`,
    },
  ],

  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    fontFamily: `Averta, sans-serif`,
    '-webkit-font-smoothing': 'antialiased',
    textRendering: 'geometricPrecision',
    fontWeight: 400,
    backgroundColor: '$background', 
    color: '$text',
    transition: 'background-color ease 350ms'
  },

  'h1, h2, h3, h4, h5, h6': {
    fontFamily: 'Moranga, serif',
    color: '$heading',
  },

  h1: {
    fontSize: '2.5rem',
  },

  a: {
    textDecoration: 'none',
    color: 'inherit',
  },
})

export const Container = styled('section', {
  maxWidth: '1200px',
  width: '100%',
  margin: '0 auto',
})

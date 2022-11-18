import { globalCss, styled } from '../../stitches.config'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    backgroundColor: '#fefefd',
    fontFamily: 'Averta, sans-serif',
    '-webkit-font-smoothing': 'antialiased',
  },

  'h1, h2, h3, h4, h5, h6': {
    fontFamily: 'Moranga, serif',
  },

  h1: {
    fontSize: '2.5rem',
    color: '$black500',
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

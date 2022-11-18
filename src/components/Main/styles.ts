import { styled } from '../../../stitches.config'

export const MainContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateRows: 'repeat(3, 1fr)',
  gap: '1.5rem',
})

export const TileContainer = styled('div', {
  backgroundColor: '$backgroundAlt',
  padding: '2rem',
  borderRadius: '24px',
  border: '2px solid',
  borderColor: '$border',
  height: '16.875rem',
  width: '100%',
  transition: 'all ease 400ms',

  '&:first-child': {
    gridColumnStart: 'span 2',
    width: 'inherit',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',

    img: {
      width: '8rem',
      height: 'auto',
      objectFit: 'contain',
    }
  },

  '&:nth-child(2)': {
    gridRowEnd: 'span 2',
    height: 'inherit',
  },

  '&:nth-child(4)': {
    gridRowEnd: 'span 2',
    height: 'inherit',
  },

  '&:nth-child(8)': {
    gridColumnEnd: 'span 2',
    height: 'inherit',
  },

  '&:hover': {
    boxShadow: '0 8px 24px 2px rgba(0, 0, 0, 0.2)',
  },
})

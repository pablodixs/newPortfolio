import { styled } from '../../../stitches.config'

export const MainContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateRows: 'repeat(3, 1fr)',
  gap: '1.5rem',
})

export const TileContainer = styled('div', {
  backgroundColor: '$gray100',
  padding: '2rem',
  borderRadius: '16px',
  boxShadow: '0 0 0 2px rgba(0, 0, 0, 0.05)',
  height: '16.875rem',
  width: '100%',
  transition: 'all ease 400ms',

  '&:first-child': {
    gridColumnStart: 'span 2',
    width: 'inherit',
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

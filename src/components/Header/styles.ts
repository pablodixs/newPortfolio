import { styled } from '../../../stitches.config'

export const HeaderContainer = styled('header', {
  padding: '1rem 0',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  nav: {
    ul: {
      listStyle: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',

      li: {
        fontWeight: '600',
        display: 'inline-block',

        a: {
          padding: '0.5rem 1rem',
          borderRadius: '1rem',
          color: '$text',
          lineHeight: '100%',

          '&:hover': {
            backgroundColor: '$heading',
            color: '$background',
          },
        },
      },
    },
  },
})

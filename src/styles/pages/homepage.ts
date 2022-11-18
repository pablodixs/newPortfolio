import { keyframes, styled } from '../../../stitches.config'

const showUp = keyframes({
  '0%': { opacity: '0' },
  '100%': { opacity: '1' },
})

const upAndDown = keyframes({
  '0%': {
    transform: 'translateY(-10px)'
  },
  '50%': {
    transform: 'translateY(10px)'
  },
  '100%': {
    transform: 'translateY(-10px)'
  },
})

export const HeroContainer = styled('div', {
  height: 'calc(100vh - 100px)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  svg: {
    animation: upAndDown,
    animationDuration: '4s',
    animationIterationCount: 'infinite',
    color: '$gray500',
  }
})

export const VideoContainer = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
})

export const PresentationVideo = styled('video', {
  objectFit: 'cover',
  animation: `${showUp} 200ms`,
})

export const Heading = styled('h1', {
  textAlign: 'center',
  fontSize: '3rem',
  lineHeight: '100%',
  fontWeight: '800',
  margin: '2rem 0 5rem',
  animation: `${showUp} 200ms`,
})

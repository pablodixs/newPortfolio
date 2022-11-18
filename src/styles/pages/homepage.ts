import { keyframes, styled } from '../../../stitches.config'

const showUp = keyframes({
  '0%': { opacity: '0' },
  '100%': { opacity: '1' },
})

export const HeroContainer = styled('div', {
  height: 'calc(100vh - 78px)',
})

export const VideoContainer = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '2rem',
})

export const PresentationVideo = styled('video', {
  objectFit: 'cover',
  animation: `${showUp} 200ms`,
})

export const Heading = styled('h1', {
  textAlign: 'center',
  fontSize: '3rem',
  lineHeight: '100%',
  animation: `${showUp} 200ms`,
})

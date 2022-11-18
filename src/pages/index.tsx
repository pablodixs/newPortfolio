import { Container } from '../styles/global'

import { Header } from '../components/Header'
import {
  Heading,
  HeroContainer,
  PresentationVideo,
  VideoContainer,
} from '../styles/pages/homepage'

export default function Home() {
  return (
    <Container>
      <Header />
      <HeroContainer>
        <VideoContainer>
          <PresentationVideo
            autoPlay
            muted
            loop
            src={'/presentation.mp4'}
            width={'500px'}
            height={'326px'}
          />
        </VideoContainer>
        <Heading>
          olá! sou desenvolvedor front-end <br /> e estudante de engenharia de
          software
        </Heading>
      </HeroContainer>
    </Container>
  )
}

import Head from 'next/head'
import { ArrowCircleDown } from 'phosphor-react'

import {
  Heading,
  HeroContainer,
  PresentationVideo,
  VideoContainer,
} from '../styles/pages/homepage'

import { Main } from '../components/Main'

export default function Home() {
  return (
    <>
    <Head>
      <title>Pablo Dias: Desenvolvedor Front-End</title>
      <link rel="icon" type="image/png" href="/memoji.png" />
    </Head>
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
        <ArrowCircleDown size={32} weight="fill" />
      </HeroContainer>
      <Main />
    </>
  )
}

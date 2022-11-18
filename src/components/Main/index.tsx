import Image from 'next/image'

import { MainContainer, TileContainer } from './styles'

import memoji from '../../assets/memoji-clouds.png'

export function Main() {
  return (
    <MainContainer>
      <TileContainer>
        <Image src={memoji} alt="" quality={100} draggable={false} />
        <h2>it&apos;s me, hi!</h2>
        <p>
          Because karma is my boyfriend, karma is a god, karma is the breeze on
          my hair on the weekend.Karma is relaxing thought.
        </p>
      </TileContainer>
      <TileContainer></TileContainer>
      <TileContainer></TileContainer>
      <TileContainer></TileContainer>
      <TileContainer></TileContainer>
      <TileContainer></TileContainer>
      <TileContainer></TileContainer>
      <TileContainer></TileContainer>
    </MainContainer>
  )
}

import Image from 'next/image'
import Link from 'next/link'

import logo from '../../assets/logo.svg'

import { HeaderContainer } from './styles'

export function Header() {
  return(
    <HeaderContainer>
      <Image src={logo} draggable={false} alt='' />
      <nav>
        <ul>
          <li><Link href='#'>Sobre</Link></li>
          <li><Link href='#'>Projetos</Link></li>
          <li><Link href='#'>Contato</Link></li>
        </ul>  
      </nav>
    </HeaderContainer>
  )
}
import type { AppProps } from 'next/app'

import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

import { Container, globalStyles } from '../styles/global'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Container>
        <Header />
        <Component {...pageProps} />
      </Container>
      <Footer />
    </>
  )
}

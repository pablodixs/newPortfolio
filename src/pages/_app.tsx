import type { AppProps } from 'next/app'
import { useState } from 'react'
import { darkTheme } from '../../stitches.config'

import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

import { Container, globalStyles } from '../styles/global'

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState('light')

  const getPreferredTheme = () => {
    if (window.matchMedia) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark'
      } else {
        return 'light'
      }
    }
    return 'light'
  }

  // function handleTheme() {
  //   setTheme(getPreferredTheme == 'light' ? darkTheme : 'light')
  // }

  function handleTheme() {
    setTheme('light' === theme ? darkTheme : 'light')
  }

  return (
    <body className={theme}>
      <Container>
        <Header />
        <Component {...pageProps} />
      </Container>
      <button onClick={handleTheme}>Trocar</button>
      <Footer />
      {globalStyles()}
    </body>
  )
}

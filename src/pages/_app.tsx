import type { AppProps } from 'next/app'

import 'sanitize.css'
import 'ui/scss/globals.scss'

import { Header, WidthContainer } from 'components'
import React from 'react'

function App({ Component, pageProps }: AppProps) {
  return (
    <WidthContainer>
      <Header />

      <Component {...pageProps} />
    </WidthContainer>
  )
}

export default App

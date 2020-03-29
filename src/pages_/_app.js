import React from 'react'

import { ThemeProvider } from 'styled-components'
import { Tokens, Reset } from '../components'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={Tokens}>
      <Reset />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

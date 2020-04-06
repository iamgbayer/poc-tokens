import React from 'react'

import { ThemeProvider } from 'styled-components'
import { Tokens, Reset } from '../components'
import TagManager from 'react-gtm-module'
import { useEffect } from 'react'

const tagManagerArgs = {
  gtmId: 'GTM-5HZHS57'
}


export default function App({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, [])

  return (
    <ThemeProvider theme={Tokens}>
      <Reset />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

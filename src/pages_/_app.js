import React, { useEffect } from 'react'
import TagManager from 'react-gtm-module'
import { ThemeProvider } from 'styled-components'

import { Theme, Reset } from '@/components'

const tagManagerArgs = {
  gtmId: ''
}

export default function App({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs)
  }, [])

  return (
    <ThemeProvider theme={Theme.light}>
      <Reset />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

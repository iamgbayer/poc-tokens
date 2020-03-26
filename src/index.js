import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import * as serviceWorker from './serviceWorker'
import Router from './Router'

import { Tokens, Reset } from './components'

import './i18n'

ReactDOM.render(
  <ThemeProvider theme={Tokens}>
    <React.StrictMode>
      <Reset />
      <Router />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
)

serviceWorker.unregister()

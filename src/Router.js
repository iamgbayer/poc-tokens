import React, { Suspense } from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import { Landing } from './pages'

export default function Router() {
  return (
    <Suspense fallback={<div>loading</div>}>
      <BrowserRouter>
        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
                <Route path="/" exact component={Landing} />
              </Switch>
            </AnimatePresence>
          )}
        ></Route>
      </BrowserRouter>
    </Suspense>
  )
}

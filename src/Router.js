import React, { Suspense } from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import { Landing, Signup } from './pages'

export default function Router() {
  return (
    <Suspense fallback={<div>loading</div>}>
      <BrowserRouter>
        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
                <Route path="/" exact component={Landing} />

                <Route path="/signup" exact component={Signup} />
              </Switch>
            </AnimatePresence>
          )}
        ></Route>
      </BrowserRouter>
    </Suspense>
  )
}

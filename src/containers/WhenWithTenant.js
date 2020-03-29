import React, { useEffect } from 'react'

import { hasTenant } from '../helpers'

export const WhenWithTenant = ({ children, callable }) => {
  useEffect(() => {
    hasTenant() && callable()
  }, [])

  return <>{children}</>
}

WhenWithTenant.defaultProps = {
  callable: () => {}
}

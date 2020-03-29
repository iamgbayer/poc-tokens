import React from 'react'

import Landing from './Landing'
import { hasTenantOfString } from '../helpers'

export default function Index() {
  return <Landing />
}

export async function getServerSideProps({ req }) {
  const hasTenant = hasTenantOfString(req.headers.host)

  if (!hasTenant) {
    return {
      props: {}
    }
  }

  /** @todo requisição para API de tenant aqui */

  return {
    props: {}
  }
}

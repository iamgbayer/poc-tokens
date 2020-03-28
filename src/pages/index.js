import React from 'react'

import { Landing } from './Landing'

export default function Index() {
  return <Landing />
}

export async function getServerSideProps({ req }) {
  const [subdomain, domain] = req.headers.host.split('.')

  if (!domain) {
    return {
      props: {}
    }
  }

  /** @todo requisição para API de tenant aqui */

  return {
    props: {}
  }
}

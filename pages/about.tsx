import Link from 'next/link'
import type { ReactElement } from 'react'
import { Layout, Cards } from '../components'

export default function About() {
  return (
    <div>
      Welcome to the about page. Go to the{' '}
      <Link href="/">
        <a>Home</a>
      </Link>{' '}
      page.
      <Cards.Group>
        <h3>Holis</h3>
      </Cards.Group>
    </div>
  )
}

About.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

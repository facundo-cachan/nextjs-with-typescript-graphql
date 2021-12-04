import Link from 'next/link'
import type { ReactElement } from 'react'
import { Layout } from '../components'

export default function About() {
  return (
    <div>
      Welcome to the about page. Go to the{' '}
      <Link href="/">
        <a>Home</a>
      </Link>{' '}
      page.
    </div>
  )
}

About.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

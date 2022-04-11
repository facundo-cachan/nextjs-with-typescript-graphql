import Link from 'next/link'
import type { ReactElement } from 'react'
import { Layout, Buttons } from 'components/'

export default function About() {
  return (
    <div>
      Welcome to the about page. Go to the{' '}
      <Link href="/">
        <a>Home</a>
      </Link>{' '}
      page.
      <h3>Holis</h3>
      <Buttons.Linked
        text="Linked Button"
        color="warning"
        startIcon={{ icon: 'heart' }}
        endIcon={{ icon: 'home' }}
      />
    </div>
  )
}

About.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

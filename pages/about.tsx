import Link from 'next/link'
import type { ReactElement } from 'react'
import { Layout, Buttons } from 'components'
export default function About() {
   const log = () => console.log('Click btn')
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
      <hr />
      <Buttons.Simple
        text="Simple Button"
        color="warning"
        startIcon={{ icon: 'heart' }}
        endIcon={{ icon: 'home' }}
        action={log}
      />
    </div>
  )
}

About.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

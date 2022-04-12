/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Link from 'next/link'
import { useState } from 'react'
import {
  ViewerQuery,
  useViewerQuery,
  useUpdateNameMutation,
  ViewerDocument,
} from '../../graphql/queries/viewer.graphql'
import { initializeApollo } from '../../lib/apollo'
import { Buttons, Layout } from '../../components'

const Index = ({ loading }: { loading: boolean }) => {
  const { viewer } = useViewerQuery().data!
  const [newName, setNewName] = useState('')
  const [updateNameMutation] = useUpdateNameMutation()

  const onChangeName = () => {
    updateNameMutation({
      variables: {
        name: newName,
      },
      update: (cache, mutationResult) => {
        const { data } = mutationResult
        if (!data) return // Cancel updating name in cache if no data is returned from mutation.
        // Read the data from our cache for this query.
        const { viewer } = cache.readQuery({
          query: ViewerDocument,
        }) as ViewerQuery
        const newViewer = { ...viewer }
        // Add our comment from the mutation to the end.
        newViewer.name = data.updateName.name
        // Write our data back to the cache.
        cache.writeQuery({
          query: ViewerDocument,
          data: { viewer: newViewer },
        })
      },
    })
  }

  return (
    <Layout loading={loading}>
      You&apos;re signed in as {viewer?.name} and you&apos;re {viewer?.status}. Go
      to the{' '}
      <Link href="/about">
        <a data-testid="toggle">about</a>
      </Link>
      page.
      <div>
        <input
          type="text"
          placeholder="your new name..."
          onChange={(e) => setNewName(e.target.value)}
        />
        <Buttons.Simple
          text="Test Button"
          loading
          color="danger"
        />
        <input type="button" value="change" onClick={onChangeName} />
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: ViewerDocument,
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}

export default Index

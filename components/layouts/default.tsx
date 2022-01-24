/**
 * `Layout Page Component`.
 * @param {ReactNode} Childs component.
 * @return {JSX.Element} Wrapper Component.
 */

import { useEffect, useState, ReactNode } from 'react'
import Header from '../header'
import Footer from '../footer'
import { Loaders } from '../'

type LayoutProps = {
  children: ReactNode
  loading?: boolean
}
const Layout = ({ children, loading }: LayoutProps): JSX.Element => {
  const [isMounted, setIsMounted] = useState<boolean>(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])
  return loading && !isMounted ? (
    <Loaders.Default />
  ) : (
    <div className="container is-fluid">
      <div className="notification is-primary">
        This container is <strong>fluid</strong>: it will have a 32px gap on
        either side, on any viewport size.
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  )
}
export default Layout

/**
 * `Layout Page Component`.
 * @param {ReactNode} Childs component.
 * @return {JSX.Element} Wrapper Component.
 */

import { useEffect, useState, ReactNode } from 'react'
import Header from 'components/header'
import Footer from 'components/footer'
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
    <div id="layout">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
export default Layout

/**
 * `Layout Page Component`.
 * @param {ReactNode} Childs component.
 * @return {JSX.Element} Wrapper Component.
 */
import { useEffect, useState, ReactNode } from 'react'
import { Loaders } from '../'

type LayoutProps = {
  children: ReactNode
}
const Layout = ({ children }: LayoutProps): JSX.Element => {
  const [isMounted, setIsMounted] = useState<boolean>(false)
  useEffect(() => {
    setIsMounted(false)
  }, [])
  return isMounted ? (
    <div id="layout" className="bg-white dark:bg-gray-800">
      <h1 className="text-gray-900 dark:text-white">Dark mode is here!</h1>
      <p className="text-gray-600 dark:text-gray-300">Lorem ipsum...</p>
    </div>
  ) : (
    <Loaders.Default />
  )
}
export default Layout

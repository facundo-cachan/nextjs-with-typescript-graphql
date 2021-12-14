/**
 * `Footer Component`.
 * @param {ReactNode} Childs component.
 * @return {JSX.Element}
 *  Component.
 */
import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}
const Footer = ({ children }: Props): JSX.Element => {
  return <footer>{children || <h1>Footer</h1>}</footer>
}
export default Footer

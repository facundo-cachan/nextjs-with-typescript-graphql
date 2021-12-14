/**
 * `Header Component`.
 * @param {ReactNode} Childs component.
 * @return {JSX.Element}
 *  Component.
 */
import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}
const Header = ({ children }: Props): JSX.Element => {
  return <header data-testid="header">{children || <h1>Header</h1>}</header>
}
export default Header

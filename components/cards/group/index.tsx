/**
 * `Group Page Component`.
 * @param {ReactNode} Childs component.
 * @return {JSX.Element} Wrapper Component.
 */
import { ReactNode } from 'react'

type GroupProps = {
  children: ReactNode
}
const Group = ({ children }: GroupProps): JSX.Element => {
  return (
    <div className="group border-indigo-500 hover:bg-white hover:shadow-lg hover:border-transparent ...">
      <p className="text-indigo-600 group-hover:text-gray-900 ...">
        New Project
      </p>
      <p className="text-indigo-500 group-hover:text-gray-500 ...">
        Create a new project from a variety of starting templates.
      </p>
      {children}
    </div>
  )
}
export default Group

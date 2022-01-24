import {ReactChild} from "react"
import Linked from './linked'
import Simple from './simple'
import type { Icon } from '../icon'
export { Linked, Simple }

export enum BtnType {
  "button"| "submit"| "reset"
}

export type Props = {
  accessKey?: string
  action?: () => void
  ariaLabel?: string
  children?: ReactChild
  className?: string
  color?: string
  disabled?: boolean
  endIcon?: Icon
  href?: string
  id?: string
  loading?: boolean
  name?: string
  startIcon?: Icon
  tabIndex?: number
  text?: string
  title?: string
  type?: BtnType
}

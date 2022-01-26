import { ReactChild } from 'react'
import Linked from './linked'
import Simple from './simple'
import type { Icon } from '../icon'
export { Linked, Simple }

enum Btn {
  button = 'button',
  submit = 'submit',
  reset = 'reset',
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
  type?: Btn
}

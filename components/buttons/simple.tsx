/**
 * `Simple Button Component`.
 * @return {JSX.Element} Button Component.
 */

import type { Props } from '.'
import Icon from '../icon'

const Simple = ({
  accessKey,
  action,
  ariaLabel,
  children,
  className,
  color,
  endIcon,
  id,
  loading,
  name,
  startIcon,
  tabIndex,
  text,
  title,
  type
}: Props): JSX.Element => {
  const Id = id || `button-${Math.random()}`
  const Type = type || 'button'
  const isColor = color ? `is-${color}` : 'is-primary'
  const isLoading = loading && 'is-loading'
  const classes = className ? className : ''
  console.log({classes})
  return (
    <button
      id={Id}
      datatest-id={id || Id}
      accessKey={accessKey}
      onClick={action}
      className={`button ${isColor} ${isLoading} ${classes}`}
      tabIndex={tabIndex || 0}
      title={title || text || Id}
      type={Type}
    >
      {startIcon && <Icon key={startIcon.key} icon={startIcon.icon}/>}
        {text || children}
        {endIcon && <Icon key={endIcon.key} icon={endIcon.icon}/>}
    </button>
  )
}

export default Simple

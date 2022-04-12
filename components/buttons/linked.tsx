/**
 * `Link` can assign href, text (back or/and front) to it, and styles.
 * @param {string} ariaLabel.
 * @param {ReactNode} children optionals components.
 * @param {string} className optional styles.
 * @param {boolean} disabled available default is true.
 * @param {object} endIcon icon show in after text.
 * @param {string} href path of destination, default path is root site.
 * @param {boolean} loading show spinner icon.
 * @param {boolean} newTab open un a new tab, default self tab.
 * @param {object} startIcon icon show in before text.
 * @param {SxProps} sx prop, optional, custom styles from parent component. https://mui.com/system/basics/
 * @param {string} text label.
 * @returns {JSX.Element} Button with optionals styles and icons.
 */

import Link from 'next/link'

import type { Props } from '.'
import Icon from '../icon'

interface BtnLinkedProps extends Props {
  newTab?: boolean
}

const Linked = ({
  ariaLabel,
  color,
  children,
  className,
  endIcon,
  href,
  id,
  loading,
  name,
  newTab,
  startIcon,
  text,
}: BtnLinkedProps): JSX.Element => {
  const Id = id || `button-${id || name}`
  const isColor = color ? `is-${color}` : 'is-primary'
  const isLoading = loading && 'is-loading'
  const classes = className ? className : ''
  return (
    <Link href={href || '/'}>
      <a
        id={Id}
        datatest-id={id || Id}
        aria-describedby={ariaLabel || text}
        aria-label={ariaLabel || text}
        className={`button ${isColor} ${isLoading} ${classes}`}
        href={href}
        target={newTab ? '_blank' : '_self'}
        rel="noopener noreferrer"
      >
        {startIcon && <Icon key={startIcon.key} icon={startIcon.icon}/>}
        {text || children}
        {endIcon && <Icon key={endIcon.key} icon={endIcon.icon}/>}
      </a>
    </Link>
  )
}

export default Linked

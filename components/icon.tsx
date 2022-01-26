/**
 * Custom Icon.
 * @param {string} className optional name classe of styles.
 * @param {IconName} icon available default is true.
 * @param {IconPrefix} key icon show in after text.
 * @returns {JSX.Element} Icon with optionals styles and icons.
 */
import type { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core'

export type Icon = {
  className?: string
  icon: IconName
  key?: IconPrefix
}

const Icon = ({ className, icon, key }: Icon): JSX.Element => (
  <i
    className={`${key || 'fas'} fa-${icon || 'question'} ${className || ''}`}
  />
)

export default Icon

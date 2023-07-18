import type { Badge } from './types'
import { BadgeKind } from './types'

import styles from './Badge.module.scss'

export default function Badge({ type }: Badge) {
  return (
    <div className={[
      styles.badge,
      type === BadgeKind.Featured && styles['badge--emphasis']
    ].join(' ')}>
      {type === BadgeKind.New && 'NEW!'}
      {type === BadgeKind.Featured && 'FEATURED'}
    </div>
  )
}

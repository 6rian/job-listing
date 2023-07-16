import type { Badge } from './types'
import { BadgeKind } from './types'

import './Badge.scss'

export default function Badge({ type }: Badge) {

  return (
    <div className={`badge ${type === BadgeKind.Featured && 'badge--emphasis'}`}>
      {type === BadgeKind.New && 'NEW!'}
      {type === BadgeKind.Featured && 'FEATURED'}
    </div>
  )
}

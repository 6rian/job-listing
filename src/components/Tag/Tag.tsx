import { MouseEvent } from 'react'
import type { AddFilter } from '../../App'
import styles from './Tag.module.scss'

export default function Tag({
  label,
  addFilter,
}: {
  label: string
  addFilter: AddFilter
}) {
  const handleClick = (e: MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement
    addFilter(target.innerText)
  }


  return (
    <div className={styles.tag} onClick={handleClick}>
      {label}
    </div>
  )
}

import Tag from '../Tag/Tag'
import type { AddFilter } from '../../App'
import styles from './Tags.module.scss'

export default function Tags({
  tags,
  addFilter,
}: {
  tags: string[]
  addFilter: AddFilter
}) {
  return (
    <ul className={styles.tags}>
      {tags.map((tag) => (
        <li key={tag}>
          <Tag label={tag} addFilter={addFilter} />
        </li>
      ))}
    </ul>
  )
}

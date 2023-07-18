import Tag from '../Tag/Tag'
import styles from './Tags.module.scss'

export default function Tags({ tags }: { tags: string[] }) {
  const tagsItems = tags.map((tag) => <li key={tag}><Tag label={tag} /></li>)

  return (
    <ul className={styles.tags}>
      {tagsItems}
    </ul>
  )
}

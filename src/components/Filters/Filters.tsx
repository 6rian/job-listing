import Filter from '../Filter/Filter'
import styles from './Filters.module.scss'

export default function Filters({
  filters,
  clear,
}: {
  filters: string[],
  clear: () => void,
}) {
  return (
    <div className={styles.wrapper}>
      <ul>
        {filters.map((f: any) => (
          <li key={f}>
            <Filter label={f} />
          </li>
        ))}
      </ul>
      <button onClick={() => clear()}>Clear</button>
    </div>
  )
}

import { RemoveFilter } from '../../App'
import Filter from '../Filter/Filter'
import styles from './Filters.module.scss'

export default function Filters({
  filters,
  removeFilter,
  clear,
}: {
  filters: string[]
  removeFilter: RemoveFilter
  clear: () => void
}) {
  return (
    <div className={styles.wrapper}>
      <ul>
        {filters.map((f: any) => (
          <li key={f}>
            <Filter label={f} remove={removeFilter} />
          </li>
        ))}
      </ul>
      <button onClick={() => clear()}>Clear</button>
    </div>
  )
}

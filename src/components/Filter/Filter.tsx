import { RemoveFilter } from '../../App'
import removeIcon from '../../assets/icon-remove.svg'
import styles from './Filter.module.scss'

export default function Filter({
  label,
  remove,
}: {
  label: string
  remove: RemoveFilter
}) {

  return (
    <div
      className={styles.filter}
      onClick={() => remove(label)}
    >
      <span className={styles['filter__label']}>{label}</span>
      <span className={styles['filter__close']}>
        <img src={removeIcon} />
      </span>
    </div>
  )
}

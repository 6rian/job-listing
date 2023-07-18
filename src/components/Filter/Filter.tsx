import removeIcon from '../../assets/icon-remove.svg'
import styles from './Filter.module.scss'

export default function Filter({
  label,
}: {
  label: string
}) {
  return (
    <div className={styles.filter}>
      <span className={styles['filter__label']}>{label}</span>
      <span className={styles['filter__close']}>
        <img src={removeIcon} />
      </span>
    </div>
  )
}

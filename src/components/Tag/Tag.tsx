import styles from './Tag.module.scss'

export default function Tag({ label }: { label: string }) {
  return (
    <div className={styles.tag}>
      {label}
    </div>
  )
}

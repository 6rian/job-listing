import type { JobListing } from "./types"
import Badge from "../Badge/Badge"
import { BadgeKind } from "../Badge/types"

import styles from './JobListing.module.scss'

export function JobListing({
  logo,
  company,
  new: isNew,
  featured,
  position,
  postedAt,
  contract,
  location,
}: JobListing) {

  const mainClasses: string = [
    styles.jobListing,
    featured && styles.jobListingFeatured,
  ].join(' ')

  return (
    <div className={mainClasses}>
      <img src={logo} alt={`${company} ${logo}`} />
      <div className={styles.inner}>
        <div className={styles.header}>
          <p>{company}</p>
          <div className={styles.badges}>
            {isNew && <Badge type={BadgeKind.New} />}
            {featured && <Badge type={BadgeKind.Featured} />}
          </div>
        </div>
        <p className={styles.position}>{position}</p>
        <ul className={styles.meta}>
          <li>{postedAt}</li>
          <li>{contract}</li>
          <li>{location}</li>
        </ul>
      </div>
    </div>
  )
}

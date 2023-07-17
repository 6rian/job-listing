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
  return (
    <div className={styles.jobListing}>
      <img src={logo} alt={`${company} ${logo}`} />
      <p>{company}</p>
      {isNew && <Badge type={BadgeKind.New} />}
      {featured && <Badge type={BadgeKind.Featured} />}
      <p>{position}</p>
      <ul>
        <li>{postedAt}</li>
        <li>{contract}</li>
        <li>{location}</li>
      </ul>
    </div>
  )
}

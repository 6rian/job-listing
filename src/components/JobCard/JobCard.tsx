import type { Job } from './types'
import type { AddFilter } from '../../App'
import Badge from '../Badge/Badge'
import Tags from '../Tags/Tags'
import { BadgeKind } from '../Badge/types'
import { getFilterableFields } from '../../helpers'

import classes from './JobCard.module.scss'

export default function JobCard({
  job,
  addFilter
}: {
  job: Job
  addFilter: AddFilter
}) {

  const {
    featured,
    new: isNew,
    postedAt,
    contract,
    location,
    company,
    position,
    logo,
  } = job

  const mainClasses: string = [
    classes['job-listing'],
    featured && classes['job-listing--featured'],
  ].join(' ')

  return (
    <div className={mainClasses}>
      <img src={logo} alt={`${company} ${logo}`} />
      <div className={classes.inner}>
        <div className={classes.details}>
          <div className={classes.header}>
            <p className={classes.company}>{company}</p>
            <div className={classes.badges}>
              {isNew && <Badge type={BadgeKind.New} />}
              {featured && <Badge type={BadgeKind.Featured} />}
            </div>
          </div>
          <p className={classes.position}>{position}</p>
          <ul className={classes.meta}>
            <li>{postedAt}</li>
            <li>{contract}</li>
            <li>{location}</li>
          </ul>
        </div>
        <Tags tags={getFilterableFields(job)} addFilter={addFilter} />
      </div>
    </div>
  )
}

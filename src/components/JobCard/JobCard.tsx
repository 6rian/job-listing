import type { Job } from './types'
import type { AddFilter } from '../../App'
import Badge from '../Badge/Badge'
import Tags from '../Tags/Tags'
import { BadgeKind } from '../Badge/types'

import classes from './JobCard.module.scss'

type Props = Job & {
  addFilter: AddFilter
}

export default function JobCard({
  logo,
  company,
  new: isNew,
  featured,
  position,
  postedAt,
  contract,
  location,
  role,
  level,
  languages,
  tools,
  addFilter
}: Props) {

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
        <Tags tags={[...languages, ...tools, role, level]} addFilter={addFilter} />
      </div>
    </div>
  )
}

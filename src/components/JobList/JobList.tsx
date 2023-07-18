import JobCard from '../JobCard/JobCard'
import type { Job } from '../JobCard/types'
import type { AddFilter } from '../../App'
import styles from './JobList.module.scss'

export default function JobList({
  jobs,
  addFilter,
}: {
  jobs: Job[]
  addFilter: AddFilter
}) {
  return (
    <ul className={styles['job-list']}>
      {jobs.map((job) => (
        <li key={job.id}>
          <JobCard {...job} addFilter={addFilter} />
        </li>
      ))}
    </ul>
  )
}

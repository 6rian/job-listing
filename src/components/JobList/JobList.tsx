import JobCard from '../JobCard/JobCard'
import { Job } from '../JobCard/types'
import styles from './JobList.module.scss'

export default function JobList({ jobs }: { jobs: Job[] }) {
  return (
    <ul className={styles['job-list']}>
      {jobs.map((job) => (
        <li key={job.id}>
          <JobCard {...job} />
        </li>
      ))}
    </ul>
  )
}

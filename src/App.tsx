import { useState } from 'react'
import Filters from './components/Filters/Filters'
import JobList from './components/JobList/JobList'
import styles from './App.module.scss'
import jobs from '../data/data.json'
import type { Job } from './components/JobCard/types'
import { getFilterableFields, matchesFilters } from './helpers'

export type AddFilter = (filter: string) => void
export type RemoveFilter = (filter: string) => void

function App() {
  const [filters, setFilters] = useState<string[]>([])

  const clear = (): void => {
    setFilters([])
  }

  const addFilter = (filter: string): void => {
    if (!filters.includes(filter)) {
      setFilters([...filters, filter])
    }
  }

  const removeFilter = (filter: string): void => {
    setFilters(filters.filter(f => f !== filter))
  }

  const filterJobs = (jobs: Job[]): Job[] => {
    return jobs.filter(job => {
      const possibleFilters = getFilterableFields(job)
      if (matchesFilters(possibleFilters, filters)) {
        return job
      }
    })
  }

  return (
    <>
      <div className={styles.app}>
        <header />
        <main className="container">
          {filters.length > 0 ? (
            <>
              <Filters filters={filters} removeFilter={removeFilter} clear={clear} />
              <JobList jobs={filterJobs(jobs)} addFilter={addFilter} />
            </>
          ) : (
            <JobList jobs={jobs} addFilter={addFilter} />
          )}
        </main>
      </div>
    </>
  )
}

export default App

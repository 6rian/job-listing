import { useState } from 'react'
import Filters from './components/Filters/Filters'
import JobList from './components/JobList/JobList'
import styles from './App.module.scss'
import jobs from '../data/data.json'

export type AddFilter = (filter: string) => void

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

  return (
    <>
      <div className={styles.app}>
        <header />
        {filters.length > 0 && <Filters filters={filters} clear={clear} />}
        <JobList jobs={jobs} addFilter={addFilter} />
      </div>
    </>
  )
}

export default App

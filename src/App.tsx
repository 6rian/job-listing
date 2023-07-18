import { JobListing } from './components/JobListing/JobListing'
import type { JobListing as JobListingType } from './components/JobListing/types'
import styles from './App.module.scss'

import data from '../data/data.json'

function App() {

  const listings = (data as JobListingType[]).map(l => <JobListing {...l} />)

  return (
    <>
      <div className={styles.app}>
        <header />
        <ul className={styles.list}>
          {listings}
        </ul>
      </div>
    </>
  )
}

export default App

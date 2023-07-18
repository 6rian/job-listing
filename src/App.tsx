import JobListing from './components/JobListing/JobListing'
import Filters from './components/Filters/Filters'
import type { JobListing as JobListingType } from './components/JobListing/types'
import styles from './App.module.scss'

import data from '../data/data.json'

function App() {

  const listings = (data as JobListingType[]).map(l => <li key={l.id}><JobListing {...l} /></li>)

  const clear = (): void => {
    console.info('CLEARING FILTERS')
  }

  return (
    <>
      <div className={styles.app}>
        <header />
        <Filters filters={['Frontend', 'CSS', 'JavaScript']} clear={clear} />
        <ul className={styles.list}>
          {listings}
        </ul>
      </div>
    </>
  )
}

export default App

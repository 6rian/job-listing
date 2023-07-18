import JobCard from './components/JobCard/JobCard'
import Filters from './components/Filters/Filters'
import type { Job } from './components/JobCard/types'
import styles from './App.module.scss'

import data from '../data/data.json'

function App() {

  const jobCards = (data as Job[]).map(l => <li key={l.id}><JobCard {...l} /></li>)

  const clear = (): void => {
    console.info('CLEARING FILTERS')
  }

  return (
    <>
      <div className={styles.app}>
        <header />
        <Filters filters={['Frontend', 'CSS', 'JavaScript']} clear={clear} />
        <ul className={styles.list}>
          {jobCards}
        </ul>
      </div>
    </>
  )
}

export default App

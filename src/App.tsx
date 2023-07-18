import Filters from './components/Filters/Filters'
import JobList from './components/JobList/JobList'
import styles from './App.module.scss'
import jobs from '../data/data.json'

function App() {

  const clear = (): void => {
    console.info('CLEARING FILTERS')
  }

  return (
    <>
      <div className={styles.app}>
        <header />
        <Filters filters={['Frontend', 'CSS', 'JavaScript']} clear={clear} />
        <JobList jobs={jobs} />
      </div>
    </>
  )
}

export default App

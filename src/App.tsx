import { JobListing } from './components/JobListing/JobListing'
import type { JobListing as JobListingType } from './components/JobListing/types'
import './App.scss'

import data from '../data/data.json'

function App() {

  const listings = (data as JobListingType[]).map(l => <JobListing {...l} />)

  return (
    <>
      <div>
        <p>App</p>
        <ul>
          {listings}
        </ul>
      </div>
    </>
  )
}

export default App

import type { Job } from './components/JobCard/types'

export const matchesFilters = (jobProperties: string[], filters: string[]): boolean => {
  const missing = filters.find(filter => !jobProperties.includes(filter))
  return missing ? false : true
}

export const getFilterableFields = (job: Job): string[] => {
  return [
    job.level,
    job.role,
    ...job.languages,
    ...job.tools,
  ]
}


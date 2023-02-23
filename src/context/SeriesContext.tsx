import { SeriesContextType } from '@types'
import { createContext } from 'react'

const initialContext: SeriesContextType = {
  seriesData: {
    series: null,
    hasError: null,
    isLoading: true,
    totalSeries: 0
  },
  offset: 0,
  setOffset: () => { },
  setLimit: () => { }
}

export const SeriesContext = createContext(initialContext)

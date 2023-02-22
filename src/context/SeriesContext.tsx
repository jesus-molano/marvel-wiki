import { SeriesContextType } from '@types'
import { createContext } from 'react'

const initialContext: SeriesContextType = {
  seriesData: {
    series: null,
    hasError: null,
    isLoading: true
  },
  offset: 0,
  setOffset: () => { },
  setLimit: () => { }
}

export const SeriesContext = createContext(initialContext)

import { ComicsContextType } from '@types'
import { createContext } from 'react'

const initialContext: ComicsContextType = {
  comicsData: {
    comics: null,
    hasError: null,
    isLoading: true
  },
  offset: 0,
  setOffset: () => { },
  setLimit: () => { }
}

export const ComicsContext = createContext(initialContext)

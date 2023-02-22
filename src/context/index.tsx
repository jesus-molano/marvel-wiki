import { CharactersContextType } from '@types'
import { createContext } from 'react'

const initialContext: CharactersContextType = {
  charactersData: {
    characters: null,
    hasError: null,
    isLoading: true
  },
  offset: 0,
  setOffset: () => { },
  setLimit: () => { }
}

export const CharactersContext = createContext(initialContext)

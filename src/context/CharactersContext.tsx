import { CharactersContextType } from '@types'
import { createContext } from 'react'

const initialContext: CharactersContextType = {
  charactersData: {
    characters: null,
    hasError: null,
    isLoading: true,
    attributionText: '',
    totalCharacters: 0
  },
  offset: 0,
  setOffset: () => { },
  setLimit: () => { }
}

export const CharactersContext = createContext(initialContext)

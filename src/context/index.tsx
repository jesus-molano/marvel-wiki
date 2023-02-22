import { CharactersContextType } from '@types'
import { createContext } from 'react'



const initialContext: CharactersContextType = {
  charactersData: {
    characters: null,
    hasError: null,
    isLoading: true
  },
  setCharactersData: () => {}
}

export const CharactersContext = createContext(initialContext)

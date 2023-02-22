import { createContext } from 'react'

export interface Character {
  id: number
  name: string
  images: {
    md: string
  }
  slug: string
}

export interface CharactersContextType {
  characters: Character[] | null
  hasError: string | null
  isLoading: boolean
}

const initialContext: CharactersContextType = {
  characters: null,
  hasError: null,
  isLoading: true,
}

export const CharactersContext = createContext(initialContext)

export interface Character {
  id: number
  name: string
  images: {
    md: string
  }
  slug: string
}

export interface CharactersData {
  characters: Character[] | null
  hasError: string | null
  isLoading: boolean
}

export interface CharactersContextType {
  charactersData: CharactersData | null
  setCharactersData: React.Dispatch<React.SetStateAction<CharactersData>>;
}
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
  offset: number
  setOffset: React.Dispatch<React.SetStateAction<number>>;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
}
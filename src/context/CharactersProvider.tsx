import { useFetch } from '@hooks/useFetch'
import { useEffect, useState } from 'react'
import { CharactersContext } from './index'
import type { Character, CharactersContextType } from './index'

interface Props {
  children: React.ReactNode
}

const url = 'https://akabab.github.io/superhero-api/api/all.json'

const initialState: CharactersContextType = {
  characters: null,
  hasError: null,
  isLoading: true
}

export const CharactersProvider = ({ children }: Props) => {
  const [charactersData, setCharactersData] = useState(initialState)

  const response = useFetch(url)
  const { data, hasError, isLoading } = response

  const characters = data && (data as Character[]).slice(0, 10)

  useEffect(() => {
    setCharactersData({
      characters,
      isLoading,
      hasError
    })
  }, [data])

  return (
    <CharactersContext.Provider value={charactersData}>
      {children}
    </CharactersContext.Provider>
  )
}

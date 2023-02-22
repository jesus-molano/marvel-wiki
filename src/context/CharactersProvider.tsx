import { useEffect, useState } from 'react'
import { CharactersContext } from './index'
import { getCharacters } from '@apis/getCharacters'
import { CharactersData } from '@types'

interface Props {
  children: React.ReactNode
}

const initialState: CharactersData = {
  characters: null,
  hasError: null,
  isLoading: true
}

const limit = 10
const offset = 0

export const CharactersProvider = ({ children }: Props) => {
  const [charactersData, setCharactersData] = useState(initialState)

  const { characters, hasError, isLoading }: CharactersData = getCharacters(
    limit,
    offset
  )

  useEffect(() => {
    setCharactersData({
      characters,
      isLoading,
      hasError
    })
  }, [isLoading])

  return (
    <CharactersContext.Provider value={{ charactersData, setCharactersData }}>
      {children}
    </CharactersContext.Provider>
  )
}

import { useEffect, useState } from 'react'
import { CharactersData } from '@types'
import { CharactersContext } from './CharactersContext'
import { getCharacters } from '@apis/getCharacters'

interface Props {
  children: React.ReactNode
}

const initialCharactersData: CharactersData = {
  characters: null,
  hasError: null,
  isLoading: true,
  totalCharacters: 0,
  attributionText: ''
}

const offsetStorage = sessionStorage.getItem('offset-characters')
const initialOffset = offsetStorage ? parseInt(offsetStorage) : 0

export const CharactersProvider = ({ children }: Props) => {
  const [charactersData, setCharactersData] = useState(initialCharactersData)
  const [offset, setOffset] = useState(initialOffset)
  const [limit, setLimit] = useState(10)

  const { characters, hasError, isLoading, totalCharacters, attributionText }: CharactersData = getCharacters(
    limit,
    offset
  )

  useEffect(() => {
    setCharactersData({
      characters,
      isLoading,
      hasError,
      totalCharacters,
      attributionText
    })
  }, [offset, isLoading])

  return (
    <CharactersContext.Provider value={{ charactersData, offset, setOffset, setLimit }}>
      {children}
    </CharactersContext.Provider>
  )
}

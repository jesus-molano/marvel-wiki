import { useContext, useEffect, useState } from 'react'
import { CharacterItem } from '@components/Characters/CharacterItem'
import { CharactersContext } from '@context/index'
import { MainLayout } from '@layouts/MainLayout'
import { getCharacters } from '@apis/getCharacters'

export const CharactersPage = () => {
  const total = 40
  const limit = 10
  const [offset, setOffset] = useState(0)
  const { charactersData, setCharactersData } = useContext(CharactersContext)

  const { characters, isLoading, hasError } = getCharacters(limit, offset)
  const handleNextPage = () => {
    
    if(offset >= total) return
    setOffset(offset + 10)
  }
  const handlePrevPage = () => {
    if(offset <= 0) return
    setOffset(offset - 10)
  }

  useEffect(() => {
    setCharactersData({
      characters,
      isLoading,
      hasError
    })
  }, [offset])


  return (
    <MainLayout title='Characters'>
      <div className='characters-container'>
        {isLoading && <div>Loading...</div>}
        {hasError && <div>Something went wrong</div>}
        {characters &&
          characters.map(character => (
            <CharacterItem key={character.id} character={character} />
          ))}
      </div>
      <button onClick={handlePrevPage}>
      {'<'}
      </button>
      <button onClick={handleNextPage}>
        {'>'}
      </button>

    </MainLayout>
  )
}

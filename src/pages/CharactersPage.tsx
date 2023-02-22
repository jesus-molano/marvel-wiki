import { useContext } from 'react'
import { CharacterItem } from '@components/Characters/CharacterItem'
import { CharactersContext } from '@context/CharactersContext'
import { MainLayout } from '@layouts/MainLayout'
import Pagination from '@components/Pagination'

export const CharactersPage = () => {
  const { charactersData, setOffset } = useContext(CharactersContext)

  if (!charactersData) return null
  const { characters, isLoading, hasError, totalCharacters } = charactersData

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
      {characters && <Pagination totalItems={totalCharacters} itemsPerPage={10} setOffset={setOffset} name='characters' />}
    </MainLayout>
  )
}

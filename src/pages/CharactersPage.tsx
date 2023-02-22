import { useContext } from 'react'
import { CharacterItem } from '@components/Characters/CharacterItem'
import { CharactersContext } from '@context/index'
import { MainLayout } from '@layouts/MainLayout'

export const CharactersPage = () => {
  const { charactersData } = useContext(CharactersContext)
  if (!charactersData) return null
  const { characters, hasError, isLoading } = charactersData

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
    </MainLayout>
  )
}

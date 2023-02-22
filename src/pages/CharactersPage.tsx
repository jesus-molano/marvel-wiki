import { CharacterItem } from '@components/Characters/CharacterItem'
import { CharactersContext } from '@context/index'
import { MainLayout } from '@layouts/MainLayout'
import { useContext } from 'react'




export const CharactersPage = () => {

  const { characters, hasError, isLoading } = useContext(CharactersContext)

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

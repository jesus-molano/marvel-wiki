import { CharactersContext } from '@context/CharactersContext'
import { MainLayout } from '@layouts/MainLayout'
import { useContext } from 'react'
import { Navigate, useParams } from 'react-router-dom'

export const CharacterDetail = () => {
  const { characterId } = useParams()

  const getHeroById = (id: string) => {
    const { charactersData } = useContext(CharactersContext);
    if (!charactersData?.characters) return undefined
    return charactersData?.characters.find(character => character.id === Number(id));
  }
  if (!characterId) return <Navigate to="/" />
  const character = getHeroById(characterId);
  if(!character) return <Navigate to='/' />

  return (
    <MainLayout title={character.name}>
      <div className='character-detail'>
        <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
        <div className='character-detail-info'>
          <p>{character.description}</p>
        </div>
      </div>
    </MainLayout>
  )
}

import { CharactersContext } from '@context/CharactersContext'
import { MainLayout } from '@layouts/MainLayout'
import { useContext } from 'react'
import { Navigate, useParams } from 'react-router-dom'

export const CharacterDetailPage = () => {
  const { characterId } = useParams()

  const getHeroById = (id: string) => {
    const { charactersData } = useContext(CharactersContext)
    if (!charactersData?.characters) return undefined
    return charactersData?.characters.find(
      character => character.id === Number(id)
    )
  }
  if (!characterId) return <Navigate to='/' />
  const character = getHeroById(characterId)
  if (!character) return <Navigate to='/' />

  return (
    <MainLayout title={character.name}>
      <div className='character-detail'>
        <img
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={character.name}
        />
        <div className='character-detail-info'>
          <div className='character-description'>
            <h3>Description</h3>
            {character.description ? (
              <p>{character.description}</p>
            ) : (
              <p>No description available</p>
            )}
          </div>
          {character.comics.available > 0 && (
            <div className='character-comics'>
              <h3>Comics</h3>
              <ul>
                {character.comics.items.map((comic, index) => (
                  <li key={index}>{comic.name}</li>
                ))}
              </ul>
            </div>
          )}
          {character.series.available > 0 && (
            <div className='character-series'>
              <h3>Series</h3>
              <ul>
                {character.series.items.map((serie, index) => (
                  <li key={index}>{serie.name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  )
}

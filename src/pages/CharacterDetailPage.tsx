import { useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { getCharacterById } from '@helpers/getCharacterById'
import { MainLayout } from '@layouts/MainLayout'

export const CharacterDetailPage = () => {
  const { characterId } = useParams()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!characterId) return <Navigate to='/' />
  const character = getCharacterById(characterId)
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

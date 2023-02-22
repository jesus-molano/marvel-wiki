import { useContext } from 'react'
import { CharacterItem } from '@components/Characters/CharacterItem'
import { CharactersContext } from '@context/index'
import { MainLayout } from '@layouts/MainLayout'

export const CharactersPage = () => {
  const total = 40
  const { charactersData, offset, setOffset } = useContext(CharactersContext)
  
  const handleNextPage = () => {
    if(offset > total) return
    setOffset((currentOffset) => {
      const newOffset = currentOffset + 10
      sessionStorage.setItem('offset-characters', newOffset.toString())
      return newOffset
    })
  }
  const handlePrevPage = () => {
    if(offset <= 0) return
    setOffset((currentOffset) => {
      const newOffset = currentOffset - 10
      sessionStorage.setItem('offset-characters', newOffset.toString())
      return newOffset
    })
    
  }

  return (
    <MainLayout title='Characters'>
      <div className='characters-container'>
        {charactersData?.isLoading && <div>Loading...</div>}
        {charactersData?.hasError && <div>Something went wrong</div>}
        {charactersData?.characters &&
          charactersData.characters.map(character => (
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

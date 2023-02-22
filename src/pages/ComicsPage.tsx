import { ComicItem } from '@components/Comics/ComicItem'
import { ComicsContext } from '@context/ComicsContext'
import { MainLayout } from '@layouts/MainLayout'
import { useContext } from 'react'

export const ComicsPage = () => {
  const total = 40

  const { comicsData, offset, setOffset } = useContext(ComicsContext)

  const handleNextPage = () => {
    if(offset > total) return
    setOffset((currentOffset) => {
      const newOffset = currentOffset + 16
      sessionStorage.setItem('offset-comics', newOffset.toString())
      return newOffset
    })
  }
  const handlePrevPage = () => {
    if(offset <= 0) return
    setOffset((currentOffset) => {
      const newOffset = currentOffset - 16
      sessionStorage.setItem('offset-comics', newOffset.toString())
      return newOffset
    })
    
  }
  
  return (
    <MainLayout title='Comics'>
      <div className='comics-container'>
        {comicsData?.isLoading && <div>Loading...</div>}
        {comicsData?.hasError && <div>Something went wrong</div>}
        {comicsData?.comics &&
          comicsData.comics.map(comic => (
            <ComicItem key={comic.id} comic={comic} />
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

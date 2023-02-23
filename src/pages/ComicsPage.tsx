import { ComicItem } from '@components/Comics/ComicItem'
import { LoadingSpinner } from '@components/LoadingSpinner'
import Pagination from '@components/Pagination'
import { ComicsContext } from '@context/ComicsContext'
import { MainLayout } from '@layouts/MainLayout'
import { useContext } from 'react'

export const ComicsPage = () => {
  const { comicsData, offset, setOffset } = useContext(ComicsContext)
  if (!comicsData) return null
  const { comics, isLoading, hasError, totalComics } = comicsData

  return (
    <MainLayout title='Comics'>
      <div className='comics-container'>
        {isLoading ? (
          <LoadingSpinner />
        ) : hasError ? (
          <div>Something went wrong</div>
        ) : (
          comics &&
          comics.map(comic => <ComicItem key={comic.id} comic={comic} />)
        )}
      </div>
      {comics && (
        <Pagination
          name='comics'
          currentPage={offset}
          setOffset={setOffset}
          totalItems={totalComics}
          itemsPerPage={16}
        />
      )}
    </MainLayout>
  )
}

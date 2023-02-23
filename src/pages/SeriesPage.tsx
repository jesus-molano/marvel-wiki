import { LoadingSpinner } from '@components/LoadingSpinner'
import Pagination from '@components/Pagination'
import { SerieItem } from '@components/Series/Serieitem'
import { SeriesContext } from '@context/SeriesContext'
import { MainLayout } from '@layouts/MainLayout'
import { useContext } from 'react'

export const SeriesPage = () => {
  const { seriesData, offset, setOffset } = useContext(SeriesContext)
  if (!seriesData) return null
  const { series, isLoading, hasError, totalSeries } = seriesData

  return (
    <MainLayout title='Series'>
      <div className='comics-container'>
        {isLoading ? (
          <LoadingSpinner />
        ) : hasError ? (
          <div>Something went wrong</div>
        ) : (
          series &&
          series.map(serie => <SerieItem key={serie.id} serie={serie} />)
        )}
      </div>
      {series && (
        <Pagination
          name='series'
          currentPage={offset}
          setOffset={setOffset}
          totalItems={totalSeries}
          itemsPerPage={16}
        />
      )}
    </MainLayout>
  )
}

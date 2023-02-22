import { SerieItem } from '@components/Series/Serieitem'
import { SeriesContext } from '@context/SeriesContext'
import { MainLayout } from '@layouts/MainLayout'
import { useContext } from 'react'

export const SeriesPage = () => {

  const total = 80

  const { seriesData, offset, setOffset } = useContext(SeriesContext)

  const handleNextPage = () => {
    if(offset > total) return
    setOffset((currentOffset) => {
      const newOffset = currentOffset + 16
      sessionStorage.setItem('offset-series', newOffset.toString())
      return newOffset
    })
  }
  const handlePrevPage = () => {
    if(offset <= 0) return
    setOffset((currentOffset) => {
      const newOffset = currentOffset - 16
      sessionStorage.setItem('offset-series', newOffset.toString())
      return newOffset
    })
    
  }

  return (
    <MainLayout title='Series'>
      <div className='series-container'>
        {seriesData?.isLoading && <div>Loading...</div>}
        {seriesData?.hasError && <div>Something went wrong</div>}
        {seriesData?.series &&
          seriesData.series.map(serie => (
            <SerieItem key={serie.id} serie={serie} />
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

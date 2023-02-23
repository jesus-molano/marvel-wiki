import { useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { getSerieById } from '@helpers/getSerieById'
import { MainLayout } from '@layouts/MainLayout'

export const SerieDetailPage = () => {
  const { serieId } = useParams()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!serieId) return <Navigate to='/' />
  const serie = getSerieById(serieId)
  if (!serie) return <Navigate to='/' />

  return (
    <MainLayout title={serie.title}>
      <div className='comic-detail'>
        <img
          src={`${serie.thumbnail.path}.${serie.thumbnail.extension}`}
          alt={serie.title}
        />

        <div className='comic-description'>
          <h3>Description</h3>
          {serie.description ? (
            <p>{serie.description}</p>
          ) : (
            <p>No description available</p>
          )}
        </div>
      </div>
    </MainLayout>
  )
}

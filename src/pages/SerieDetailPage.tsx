import { SeriesContext } from "@context/SeriesContext"
import { MainLayout } from "@layouts/MainLayout"
import { useContext } from "react"
import { Navigate, useParams } from "react-router-dom"

export const SerieDetailPage = () => {

  const { serieId } = useParams()

  const getSerieById = (id: string) => {
    const { seriesData } = useContext(SeriesContext)
    if (!seriesData?.series) return undefined
    return seriesData?.series.find(
      comic => comic.id === Number(id)
    )
  }
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
        <div className='comic-detail-info'>
          <div className='comic-description'>
            <h3>Description</h3>
            {serie.description ? (
              <p>{serie.description}</p>
            ) : (
              <p>No description available</p>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

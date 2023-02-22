import { ComicsContext } from "@context/ComicsContext"
import { MainLayout } from "@layouts/MainLayout"
import { useContext } from "react"
import { Navigate, useParams } from "react-router-dom"

export const ComicDetailPage = () => {

  const { comicId } = useParams()

  const getComicById = (id: string) => {
    const { comicsData } = useContext(ComicsContext)
    if (!comicsData?.comics) return undefined
    return comicsData?.comics.find(
      comic => comic.id === Number(id)
    )
  }
  if (!comicId) return <Navigate to='/' />
  const comic = getComicById(comicId)
  if (!comic) return <Navigate to='/' />
  return (
    <MainLayout title={comic.title}>
      <div className='comic-detail'>
        <img
          src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
          alt={comic.title}
        />
        <div className='comic-detail-info'>
          <div className='comic-description'>
            <h3>Description</h3>
            {comic.description ? (
              <p>{comic.description}</p>
            ) : (
              <p>No description available</p>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

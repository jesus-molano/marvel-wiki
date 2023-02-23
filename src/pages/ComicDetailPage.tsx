import { useEffect } from "react"
import { Navigate, useParams } from "react-router-dom"
import { getComicById } from "@helpers/getComicById"
import { MainLayout } from "@layouts/MainLayout"

export const ComicDetailPage = () => {
  const { comicId } = useParams()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

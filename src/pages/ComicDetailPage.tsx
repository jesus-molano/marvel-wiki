import { useEffect } from "react"
import { Navigate, useParams } from "react-router-dom"
import { getComicById } from "@helpers/getComicById"
import { MainLayout } from "@layouts/MainLayout"
import { eliminateBrTags } from "@helpers/eliminateBrTags"

export const ComicDetailPage = () => {
  const { comicId } = useParams()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!comicId) return <Navigate to='/' />
  const comic = getComicById(comicId)
  if (!comic) return <Navigate to='/' />

  const cleanDescription = comic.description && eliminateBrTags(comic.description)

  return (
    <MainLayout title={comic.title}>
      <div className='comic-detail'>
        <img
          src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
          alt={comic.title}
        />
        <div className='comic-description'>
          <h3>Description</h3>
          {comic.description ? (
            <p>{cleanDescription}</p>
          ) : (
            <p>No description available</p>
          )}
        </div>
      </div>
    </MainLayout>
  )
}

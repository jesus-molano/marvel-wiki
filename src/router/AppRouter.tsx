
import { Navigate, Route, Routes } from 'react-router-dom'
import { CharactersPage, ComicsPage, NotFoundPage, SeriesPage } from '@pages/index'
import {CharacterDetailPage} from '@pages/CharacterDetailPage'
import { ComicDetailPage } from '@pages/ComicDetailPage'
const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to='/characters' />} />
        <Route path='/characters' element={<CharactersPage />} />
        <Route path='/characters/:characterId' element={<CharacterDetailPage />} />
        <Route path='/comics' element={<ComicsPage />} />
        <Route path='/comics/:comicId' element={<ComicDetailPage />} />
        <Route path='/series' element={<SeriesPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default AppRouter

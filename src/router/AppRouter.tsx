
import { Navigate, Route, Routes } from 'react-router-dom'
import { CharactersPage, ComicsPage, NotFoundPage, SeriesPage } from '@pages/index'
import {CharacterDetailPage} from '@pages/CharacterDetailPage'
const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to='/characters' />} />
        <Route path='/characters' element={<CharactersPage />} />
        <Route path='/characters/:characterId' element={<CharacterDetailPage />} />
        <Route path='/comics' element={<ComicsPage />} />
        <Route path='/series' element={<SeriesPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default AppRouter

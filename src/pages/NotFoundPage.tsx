import { MainLayout } from '@layouts/MainLayout'

export const NotFoundPage = () => {
  return (
    <MainLayout>
      <div className='page-not-found'>
        <h2>404</h2>
        <h3>Page not found</h3>
      </div>
    </MainLayout>
  )
}

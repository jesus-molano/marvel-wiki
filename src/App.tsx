import AppRouter from '@router/AppRouter'
import { ProvidersLayout } from '@layouts/ProvidersLayout'
import { AppLayout } from '@layouts/AppLayout'

function App () {
  return (
    <ProvidersLayout>
      <AppLayout>
        <AppRouter />
      </AppLayout>
    </ProvidersLayout>
  )
}

export default App

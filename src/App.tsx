import { CharactersProvider } from '@context/CharactersProvider'
import AppRouter from '@router/AppRouter'
import { AppLayout } from '@layouts/AppLayout'
import { ComicsProvider } from '@context/ComicsProvider'

function App () {
  return (
    <CharactersProvider>
      <ComicsProvider>
        <AppLayout>
          <AppRouter />
        </AppLayout>
      </ComicsProvider>
    </CharactersProvider>
  )
}

export default App

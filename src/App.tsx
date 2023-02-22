import { CharactersProvider } from "@context/CharactersProvider"
import AppRouter from "@router/AppRouter"
import { AppLayout } from "@layouts/AppLayout"


function App() {
  return (
    <CharactersProvider>
    <AppLayout>
      <AppRouter />
      </AppLayout>
    </CharactersProvider>
  )
}

export default App

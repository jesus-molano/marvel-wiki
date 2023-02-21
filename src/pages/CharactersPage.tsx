import { CharacterItem } from '@components/Characters/CharacterItem'
import { useFetch } from '@hooks/useFetch'
import { MainLayout } from '@layouts/MainLayout'

const url = 'https://akabab.github.io/superhero-api/api/all.json'

interface FetchResponse {
  data: Character[] | null
  hasError: string | null
  isLoading: boolean
}

type Character = {
  id: number
  name: string
  images: {
    md: string
  },
  slug: string
}

export const CharactersPage = () => {
  const response: FetchResponse = useFetch(url)
  const { data, hasError, isLoading } = response

  const fewHeroes = data && data.slice(0, 10)

  console.log('characters page render')

  return (
    <MainLayout title='Characters'>
      <div className='characters-container'>
        {isLoading && <div>Loading...</div>}
        {hasError && <div>Something went wrong</div>}
        {fewHeroes &&
          fewHeroes.map(character => (
            <CharacterItem key={character.id} character={character} />
          ))}
      </div>
    </MainLayout>
  )
}

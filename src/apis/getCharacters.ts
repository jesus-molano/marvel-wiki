import { useFetch } from "@hooks/useFetch"

export const getCharacters = (limit: number, offset: number) => {
  const url = 'https://akabab.github.io/superhero-api/api/all.json'
  const {data, hasError, isLoading} = useFetch(url)
  return {
    characters: data?.slice(offset, offset + limit),
    hasError,
    isLoading
  }
}

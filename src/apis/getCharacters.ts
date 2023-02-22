import { useFetch } from "@hooks/useFetch"

export const getCharacters = (limit: number = 10, offset: number = 0) => {
  console.log('me llaman');
  
  const url = 'https://akabab.github.io/superhero-api/api/all.json'
  const {data, hasError, isLoading} = useFetch(url)
  return {
    characters: data?.slice(offset, offset + limit),
    hasError,
    isLoading
  }
}

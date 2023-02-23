import { useFetch } from "@hooks/useFetch"

const API_KEY = import.meta.env.VITE_MARVEL_API_KEY
const API_URL = import.meta.env.VITE_MARVEL_API_URL

export const getCharacters = (limit: number = 10, offset: number = 0, orderBy: string = 'name') => {
  const url = `${API_URL}characters?orderBy=${orderBy}&limit=${limit}&offset=${offset}&apikey=${API_KEY}`
  const { data, hasError, isLoading } = useFetch(url)
  
  const characters = data?.data?.results
  const totalCharacters = data?.data?.total
  const attributionText = data?.attributionText

  return {
    characters,
    totalCharacters,
    hasError,
    isLoading,
    attributionText
  }
}

import { useFetch } from "@hooks/useFetch"
const API_KEY = import.meta.env.VITE_MARVEL_API_KEY
const API_URL = import.meta.env.VITE_MARVEL_API_URL
const API_TS = import.meta.env.VITE_MARVEL_API_TS
const API_HASH = import.meta.env.VITE_MARVEL_API_HASH

export const getComics = (limit: number = 16, offset: number = 0, orderBy: string = 'title') => {
  const url = `${API_URL}comics?orderBy=${orderBy}&limit=${limit}&offset=${offset}&ts=${API_TS}&apikey=${API_KEY}&hash=${API_HASH}`
  const { data, hasError, isLoading } = useFetch(url)
  const totalComics = data?.data?.total
  const comics = data?.data?.results
  
  return {
    comics,
    hasError,
    isLoading,
    totalComics
  }
}
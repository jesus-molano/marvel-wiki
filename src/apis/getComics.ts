import { useFetch } from "@hooks/useFetch"
const API_KEY = import.meta.env.VITE_MARVEL_API_KEY
const API_URL = import.meta.env.VITE_MARVEL_API_URL

export const getComics = (limit: number = 16, offset: number = 0, orderBy: string = 'title') => {
  console.log('me llaman');

  const url = `${API_URL}comics?orderBy=${orderBy}&limit=${limit}&offset=${offset}&apikey=${API_KEY}`
  const { data, hasError, isLoading } = useFetch(url)
  
  const comics = data?.data?.results
  
  return {
    comics,
    hasError,
    isLoading
  }
}
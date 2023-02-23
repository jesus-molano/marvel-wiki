import { useFetch } from "@hooks/useFetch"
const API_KEY = import.meta.env.VITE_MARVEL_API_KEY
const API_URL = import.meta.env.VITE_MARVEL_API_URL

export const getSeries = (limit: number = 16, offset: number = 0, orderBy: string = 'title') => {
  const url = `${API_URL}series?orderBy=${orderBy}&limit=${limit}&offset=${offset}&apikey=${API_KEY}`
  const { data, hasError, isLoading } = useFetch(url)
  const totalSeries = data?.data?.total
  const series = data?.data?.results
  
  return {
    series,
    hasError,
    isLoading,
    totalSeries
  }
}
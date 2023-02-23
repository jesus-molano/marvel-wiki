import { useFetch } from "@hooks/useFetch"
const API_KEY = import.meta.env.VITE_MARVEL_API_KEY
const API_URL = import.meta.env.VITE_MARVEL_API_URL
const API_TS = import.meta.env.VITE_MARVEL_API_TS
const API_HASH = import.meta.env.VITE_MARVEL_API_HASH

export const getSeries = (limit: number = 16, offset: number = 0, orderBy: string = 'title') => {
  const url = `${API_URL}series?orderBy=${orderBy}&limit=${limit}&offset=${offset}&ts=${API_TS}&apikey=${API_KEY}&hash=${API_HASH}`
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
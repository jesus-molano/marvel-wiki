import { useContext } from "react"
import { SeriesContext } from "@context/SeriesContext"

export const getSerieById = (id: string) => {
  const { seriesData } = useContext(SeriesContext)
  if (!seriesData?.series) return undefined
  return seriesData?.series.find(
    comic => comic.id === Number(id)
  )
}
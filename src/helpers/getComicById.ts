import { useContext } from "react"
import { ComicsContext } from "@context/ComicsContext"

export const getComicById = (id: string) => {
  const { comicsData } = useContext(ComicsContext)
  if (!comicsData?.comics) return undefined
  return comicsData?.comics.find(
    comic => comic.id === Number(id)
  )
}
import { useContext } from "react"
import { CharactersContext } from "@context/CharactersContext"

export const getCharacterById = (id: string) => {
  const { charactersData } = useContext(CharactersContext)
  if (!charactersData?.characters) return undefined
  return charactersData?.characters.find(
    character => character.id === Number(id)
  )
}
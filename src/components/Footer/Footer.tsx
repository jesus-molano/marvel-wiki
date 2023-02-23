import { CharactersContext } from "@context/CharactersContext"
import { useContext } from "react"

export function Footer() {
  
  const { charactersData } = useContext(CharactersContext)
  if (!charactersData) return null
  const { attributionText } = charactersData
  return (
    <footer>
      <small>{attributionText}</small>
    </footer>
  )
}

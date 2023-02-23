import { CharactersContext } from "@context/CharactersContext"
import { useContext } from "react"

export function Footer() {
  
  const { charactersData } = useContext(CharactersContext)
  if (!charactersData) return null
  const { attributionText } = charactersData
  return (
    <footer>
      <a href="https://github.com/jesus-molano/marvel-wiki" target='_blank' rel="noreferrer" >
        <img src="/images/github.svg" alt="github" />
        <small>Github</small>
      </a>
      <small>{attributionText}</small>
    </footer>
  )
}

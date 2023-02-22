import { Character } from '@types'
import { Link } from 'react-router-dom'

interface Props {
  character: Character
}

export const CharacterItem = ({ character }:Props) => {
  const { id, name, thumbnail } = character
  const imgURL = `${thumbnail.path}.${thumbnail.extension}`
  return (
    <Link to={`/characters/${id}`} className='character'>
      <p>{name}</p>
      <img src={imgURL} alt={name} loading='lazy' />
    </Link>
  )
}

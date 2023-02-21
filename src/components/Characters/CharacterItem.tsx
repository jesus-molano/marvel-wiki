import { Link } from 'react-router-dom'

type Character = {
  id: number
  name: string
  images: {
    md: string
  },
  slug: string
}

interface Props {
  character: Character
}

export const CharacterItem = ({ character }:Props) => {
  const { name, slug } = character
  return (
    <Link to={`characters/${slug}`} className='character'>
      <p>{name}</p>
      <img src={character.images.md} alt={name} loading='lazy' />
    </Link>
  )
}

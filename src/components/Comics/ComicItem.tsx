import { Comic } from '@types'
import { Link } from 'react-router-dom'

interface Props {
  comic: Comic
}

export const ComicItem = ({ comic }:Props) => {
  const { title, thumbnail } = comic
  const imgURL = `${thumbnail.path}.${thumbnail.extension}`
  return (
    <Link to={`/${title}`} className='comic'>
      <p>{title}</p>
      <img src={imgURL} alt={title} loading='lazy' />
    </Link>
  )
}

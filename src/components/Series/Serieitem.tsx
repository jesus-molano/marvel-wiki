import { Serie } from '@types'
import { Link } from 'react-router-dom'

interface Props {
  serie: Serie
}

export const SerieItem = ({ serie }:Props) => {
  const {id, title, thumbnail } = serie
  const imgURL = `${thumbnail.path}.${thumbnail.extension}`
  return (
    <Link to={`/series/${id}`} className='comic'>
      <p>{title}</p>
      <img src={imgURL} alt={title} loading='lazy' />
    </Link>
  )
}

import { useEffect, useState } from 'react'
import { getComics } from '@apis/getComics'
import { ComicsContext } from './ComicsContext'
import { ComicsData } from '@types'

interface Props {
  children: React.ReactNode
}

const initialComicsData: ComicsData = {
  comics: null,
  hasError: null,
  isLoading: true,
  totalComics: 0
}

const offsetStorage = sessionStorage.getItem('offset-comics')
const initialOffset = offsetStorage ? parseInt(offsetStorage) : 0

export const ComicsProvider = ({ children }: Props) => {
  const [comicsData, setComicsData] = useState(initialComicsData)
  const [offset, setOffset] = useState(initialOffset)
  const [limit, setLimit] = useState(16)

  const { comics, hasError, isLoading, totalComics }: ComicsData = getComics(
    limit,
    offset
  )

  useEffect(() => {
    setComicsData({
      comics,
      isLoading,
      hasError,
      totalComics
    })
  }, [offset, isLoading])

  return (
    <ComicsContext.Provider value={{ comicsData, offset, setOffset, setLimit }}>
      {children}
    </ComicsContext.Provider>
  )
}
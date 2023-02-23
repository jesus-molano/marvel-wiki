import { useEffect, useState } from 'react'
import { getSeries } from '@apis/getSeries'
import { SeriesContext } from './SeriesContext'
import { SeriesData } from '@types'

interface Props {
  children: React.ReactNode
}

const initialComicsData: SeriesData = {
  series: null,
  hasError: null,
  isLoading: true,
  totalSeries: 0
}

const offsetStorage = sessionStorage.getItem('offset-comics')
const initialOffset = offsetStorage ? parseInt(offsetStorage) : 0

export const SeriesProvider = ({ children }: Props) => {
  const [seriesData, setSeriesData] = useState(initialComicsData)
  const [offset, setOffset] = useState(initialOffset)
  const [limit, setLimit] = useState(32)

  const { series, hasError, isLoading, totalSeries }: SeriesData = getSeries(
    limit,
    offset
  )

  useEffect(() => {
    setSeriesData({
      series,
      isLoading,
      hasError,
      totalSeries
    })
  }, [offset, isLoading])

  return (
    <SeriesContext.Provider value={{ seriesData, offset, setOffset, setLimit }}>
      {children}
    </SeriesContext.Provider>
  )
}
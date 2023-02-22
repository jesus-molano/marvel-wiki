import { CharactersProvider } from '@context/CharactersProvider'
import { SeriesProvider } from '@context/SeriesProvider'
import { ComicsProvider } from '@context/ComicsProvider'
import React from 'react'
import { AppLayout } from './AppLayout'

interface Props {
  children: React.ReactNode
}

export const ProvidersLayout = ({ children }: Props) => {
  return (
    <CharactersProvider>
      <ComicsProvider>
        <SeriesProvider>
          {children}
        </SeriesProvider>
      </ComicsProvider>
    </CharactersProvider>
  )
}

import { useEffect, useState } from 'react'

interface State {
  isLoading: boolean
  hasError: string | null
  data: any
}

const initialState = {
  isLoading: true,
  hasError: null,
  data: null
}
export const useFetch = (url: string) => {
  const [state, setState] = useState<State>(initialState)

  const getFetch = async () => {
    setState({
      ...state,
      isLoading: true
    })
    try {
      const response = await fetch(url)
      const data = await response.json()
      setState({
        data,
        isLoading: false,
        hasError: null
      })
    } catch (error: unknown) {
      if (error instanceof Error) {
        setState({
          data: null,
          isLoading: false,
          hasError: error.message
        })
      }
    }
  }

  useEffect(() => {
    getFetch()
  }, [url])

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError
  }
}

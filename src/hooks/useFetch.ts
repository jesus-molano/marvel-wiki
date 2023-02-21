import { useEffect, useState } from "react"

const initialState = {
  isLoading: true,
  hasError: null,
  data: null
}
export const useFetch = (url: string) => {
  const [state, setState] = useState(initialState)
  
  const getFetch = async () => {
    setState({
      ...state,
      isLoading: true
    })

    const response = await fetch(url)
    const data = await response.json()

    setState({
      data,
      isLoading: false,
      hasError: null
    })
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
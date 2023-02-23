import { useEffect, useState } from 'react'

interface Props {
  totalItems: number
  itemsPerPage: number
  currentPage?: number
  setOffset: React.Dispatch<React.SetStateAction<number>>
  name: "comics" | "characters" |  "series"
}

function Pagination ({totalItems = 50,itemsPerPage = 10,currentPage: initialPage = 1,setOffset,name}: Props) {
  const [currentPage, setCurrentPage] = useState(initialPage)
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const offsetSessionStorage = sessionStorage.getItem(`offset-${name}`)

  useEffect(() => {
    if (offsetSessionStorage) {
      const offset = parseInt(offsetSessionStorage)
      const page = Math.ceil(offset / itemsPerPage) + 1
      return setCurrentPage(page)
    }
    setCurrentPage(initialPage)
  }, [initialPage])

  function handleClick (page: number) {
    setCurrentPage(page)
    const newOffset = (page - 1) * itemsPerPage
    sessionStorage.setItem(`offset-${name}`, newOffset.toString())
    setOffset && setOffset(newOffset)
  }

  // Pagination logic
  let startPage = 1
  let endPage = totalPages
  if (totalPages > 5) {
    if (currentPage < 5) {
      startPage = 1
      endPage = 5
    } else if (currentPage > totalPages - 4) {
      startPage = totalPages - 4
      endPage = totalPages
    } else {
      startPage = currentPage - 2
      endPage = currentPage + 2
    }
  }

  return (
    <div className='pagination'>
      <button
        onClick={() => handleClick(1)}
        disabled={currentPage === 1}
        className='first'
      >
        {'<<'}
      </button>
      <div className='pagination-numbers'>
        {Array.from({ length: totalPages }, (_, index) => {
          const page = index + 1
          const isActive = page === currentPage
          if (page >= startPage && page <= endPage) {
            return (
              <button key={page} onClick={() => handleClick(page)} className={isActive ? 'active' : ''}>
                {page}
              </button>
            )
          } else {
            return null
          }
        })}
      </div>
      <button
        onClick={() => handleClick(totalPages)}
        disabled={currentPage === totalPages}
        className='last'
      >
        {'>>'}
      </button>
    </div>
  )
}

export default Pagination

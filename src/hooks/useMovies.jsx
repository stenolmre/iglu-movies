import { useCallback, useEffect, useState } from 'react'

const API_ENDPOINT = `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=`

const useMovies = () => {
  const [movies, setMovies] = useState([])
  const [current_page, setCurrentPage] = useState(1)
  const [total_pages, setTotalPages] = useState(1)

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    fetch(`${API_ENDPOINT}${current_page}`, { signal })
      .then(response => response.json())
      .then(data => {
        setTotalPages(data.total_pages)

        if (current_page === 1) {
          setMovies(data.results)
        } else {
          setMovies(prev_movies => [...prev_movies, ...data.results])
        }
      })
      .catch(error => console.warn(error))

    return () => controller.abort()
  }, [current_page])

  const loadMoreMovies = useCallback(() => {
    if (current_page >= total_pages) return
    setCurrentPage(prev => prev + 1)
  }, [current_page, total_pages])

  return {
    movies,
    loadMoreMovies
  }
}

export default useMovies

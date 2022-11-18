import { useCallback, useEffect, useState } from 'react'

const useMovies = () => {
  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState([])
  const [current_page, setCurrentPage] = useState(1)
  const [total_pages, setTotalPages] = useState(2)
  const [selected_genre, setSelectedGenre] = useState(null)
  const [query, setQuery] = useState(null)

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    if (current_page === 1) {
      setLoading(true)
    }

    let path = `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&sort_by=vote_average.desc&page=${current_page}`

    if (selected_genre != null) {
      path = `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=${current_page}&with_watch_monetization_types=flatrate&with_genres=${selected_genre}`
    } else if (query != null) {
      path = `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&sort_by=vote_average.desc&page=${current_page}&query=${query}`
    }

    fetch(path, { signal })
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
      .finally(() => {
        setLoading(false)
      })

    return () => controller.abort()
  }, [current_page])

  const loadMoreMovies = useCallback(() => {
    if (current_page >= total_pages) return
    setCurrentPage(prev => prev + 1)
  }, [current_page, total_pages])

  const selectActiveGenre = useCallback(genre_id => {
    setQuery(null)
    setSelectedGenre(genre_id)
    setCurrentPage(1)
  }, [])

  const searchMovies = useCallback(query => {
    setSelectedGenre(null)
    setQuery(query)
    setCurrentPage(1)
  }, [])

  return {
    loading,
    movies,
    selected_genre,

    loadMoreMovies,
    selectActiveGenre,
    searchMovies
  }
}

export default useMovies

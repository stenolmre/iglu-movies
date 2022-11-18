import { useEffect, useState } from 'react'

const API_ENDPOINT = `https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`

const useGenres = () => {
  const [genres_map, setGenresMap] = useState({})
  const [genres, setGenres] = useState([])

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    fetch(API_ENDPOINT, { signal })
      .then(response => response.json())
      .then(data => {
        data.genres.forEach(genre => {
          setGenres(prev => [...prev, genre.name])
          setGenresMap(prev => ({ ...prev, [genre.id]: genre.name }))
        })
      })
      .catch(error => console.warn(error))

    return () => controller.abort()
  }, [])

  return {
    genres_map,
    genres
  }
}

export default useGenres

import React, { useCallback, useEffect, useRef, useState } from 'react'

import Card from './card/Card'

import styles from './Movies.module.scss'

const Movies = ({ genres_map, loading, movies, loadMoreMovies }) => {
  const [show_details, setShowDetails] = useState(-1)

  const movies_list = useRef()

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.scrollingElement.scrollHeight) {
      loadMoreMovies()
    }
  }

  const loadMovies = useCallback(() => {
    if (movies_list.current == null) return

    const { height } = movies_list.current.getBoundingClientRect()

    if (height < window.innerHeight && movies != null) {
      loadMoreMovies()
    }
  }, [movies_list.current, movies])

  useEffect(() => {
    loadMovies()

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadMovies]);

  return <>
    {
      loading
        ? <div className={styles.movies__loading}/>
        : <>
            <ul ref={movies_list} className={styles.movies__list} role="list">
              {
                movies.map((movie, index) => <Card
                  key={index}
                  movie={movie}
                  show_details={show_details === index}
                  genres_map={genres_map}
                  setShowDetails={() => setShowDetails(index)}
                />)
              }
            </ul>
        </>
    }
  </>
}

export default Movies

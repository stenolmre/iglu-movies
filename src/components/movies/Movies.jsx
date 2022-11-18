import React, { useRef, useState } from 'react'

import useOnViewport from '../../hooks/useOnViewport'

import Card from './card/Card'

import styles from './Movies.module.scss'

const Movies = ({ genres_map, loading, movies, loadMoreMovies }) => {
  const [show_details, setShowDetails] = useState(-1)

  const last_list_item = useRef()
  useOnViewport(last_list_item, () => loadMoreMovies())

  return <>
    {
      loading
        ? <div className={styles.movies__loading}/>
        : <>
            <ul className={styles.movies__list} role="list">
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
    <div ref={last_list_item}></div>
  </>
}

export default Movies

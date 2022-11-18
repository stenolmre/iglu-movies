import React, { useEffect, useRef, useState } from 'react'

import useMovies from '../../hooks/useMovies'
import useOnViewport from '../../hooks/useOnViewport'

import Card from './card/Card'

import styles from './Movies.module.scss'

const Movies = () => {
  const { movies, loadMoreMovies } = useMovies()
  const [show_details, setShowDetails] = useState()

  const last_list_item = useRef()
  const is_intersection = useOnViewport(last_list_item)

  useEffect(() => {
    if (is_intersection) {
      console.log('LOAD MORE')
      loadMoreMovies()
    }
  }, [is_intersection])

  return <ul className={styles.movies__list} type="none">
    {
      movies.map((movie, index) => <Card
        key={index}
        movie={movie}
        show_details={show_details === index}
        setShowDetails={() => setShowDetails(index)}
      />)
    }
    <li ref={last_list_item}></li>
  </ul>
}

export default Movies

import React, { useState } from 'react'

import useMovies from '../../hooks/useMovies'

import Card from './card/Card'

import styles from './Movies.module.scss'

const Movies = () => {
  const { movies } = useMovies()
  const [show_details, setShowDetails] = useState()

  return <ul className={styles.movies__list} type="none">
    {
      movies.map((movie, index) => <Card
        key={index}
        movie={movie}
        show_details={show_details === index}
        setShowDetails={() => setShowDetails(index)}
      />)
    }
  </ul>
}

export default Movies

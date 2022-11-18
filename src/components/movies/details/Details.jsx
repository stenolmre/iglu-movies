import React from 'react'

import Stars from '../../utils/stars/Stars'

import styles from './Details.module.scss'

const Details = ({ movie, arrow_position, genres_map }) => {
  return <div className={styles.details} style={{ '--arrow-position': `${arrow_position}px` }}>
    <div className={styles.details__content}>
      <h3>{movie.title}</h3>
      <Stars rating={movie.vote_average}/>
      <p>{movie.overview}</p>
      <ul className={styles['details__content-genres']} role="list">
        {
          movie.genre_ids.map(genre_id => <li key={genre_id}>#{genres_map[genre_id]}</li>)
        }
      </ul>
    </div>
    <div
      className={styles.details__poster}
      style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})` }}
    />
  </div>
}

export default Details

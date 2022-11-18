import React from 'react'

import Stars from '../../utils/stars/Stars'

import styles from './Details.module.scss'

const Details = ({ movie, arrow_position }) => {
  return <div className={styles.details} style={{ '--arrow-position': `${arrow_position}px` }}>
    <div className={styles.details__content}>
      <h3>{movie.title}</h3>
      <Stars rating={movie.vote_average}/>
      <p>{movie.overview} Tad would love for his archeologist colleagues to accept him as one of their own, but he always messes everything up. Tad accidentally destroys a sarcophagus and unleashes an ancient spell endangering the lives of his friends: Mummy, Jeff and Belzoni. With everyone against him and only helped by Sara, he sets off on an adventure that will take him from Mexico to Chicago and from Paris to Egypt, in order to put an end to the curse of the Mummy.</p>
    </div>
    <div
      className={styles.details__poster}
      style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})` }}
    />
  </div>
}

export default Details

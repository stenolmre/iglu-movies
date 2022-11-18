import React, { useState } from 'react'

import className from '../../../utils/className'

import styles from './Card.module.scss'

const Card = ({ movie, show_details, setShowDetails }) => {
  return <>
    <li
      className={className({
        [styles.card]: true,
        [styles.active]: show_details
      })}
      style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})` }}
      onClick={setShowDetails}
    ></li>
    {
      show_details && (
        <div className={styles.details}>{movie.title}</div>
      )
    }
  </>
}

export default Card

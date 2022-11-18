import React from 'react'

import styles from './Rating.module.scss'

const Rating = ({ rating }) => {
  return <div
    className={styles.rating}
    style={{ '--rating': rating }}
    aria-label="Rating of this product is 2.3 out of 10."
  />
}

export default Rating

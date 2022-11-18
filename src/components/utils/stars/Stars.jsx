import React from 'react'

import styles from './Stars.module.scss'

const Stars = ({ rating }) => {
  return <div
    className={styles.stars}
    style={{ '--rating': rating }}
    aria-label="Rating of this product is 2.3 out of 10."
  />
}

export default Stars

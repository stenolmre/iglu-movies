import React from 'react'

import styles from './Header.module.scss'

const Header = ({ genres }) => {
  return <header className={styles.header}>
    <div className={styles.header__top}>
      <h1 className={styles['header__top-title']}>Popular Movies</h1>
      <input className={styles['header__top-search']} placeholder="Search for movies"/>
    </div>
    <ul className={styles.header__genres} role="list">
      <li className={styles['header__genres-active']}>All Movies</li>
      {
        genres.map((genre, index) => <li key={index}>{genre}</li>)
      }
      <li>More</li>
    </ul>
  </header>
}

export default Header

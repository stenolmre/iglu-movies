import React from 'react'
import className from '../../utils/className'

import styles from './Header.module.scss'

const Header = ({ genres_map, selected_genre, selectActiveGenre }) => {
  return <header className={styles.header}>
    <div className={styles.header__top}>
      <h1 className={styles['header__top-title']}>Popular Movies</h1>
      <input className={styles['header__top-search']} placeholder="Search for movies"/>
    </div>
    <ul className={styles.header__genres} role="list">
      <li
        className={className({
          [styles['header__genres-active']]: selected_genre == null
        })}
        onClick={() => selectActiveGenre(null)}
      >All Movies</li>
      {
        Object.entries(genres_map).map(([genre_id, genre_name], index) => <li
          key={index}
          className={className({
            [styles['header__genres-active']]: selected_genre == genre_id
          })}
          onClick={() => selectActiveGenre(genre_id)}
        >{genre_name}</li>)
      }
      <li>More</li>
    </ul>
  </header>
}

export default Header

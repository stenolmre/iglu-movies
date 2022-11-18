import React from 'react'

import Search from './search/Search.jsx'

import styles from './Header.module.scss'
import Genres from './genres/Genres'

const Header = ({ genres_map, selected_genre, selectActiveGenre, searchMovies }) => {
  return <header className={styles.header}>
    <div className={styles.header__top}>
      <h1 className={styles['header__top-title']}>Popular Movies</h1>
      <Search searchMovies={searchMovies} />
    </div>
    <Genres
      genres_map={genres_map}
      selected_genre={selected_genre}
      selectActiveGenre={selectActiveGenre}
    />
  </header>
}

export default Header

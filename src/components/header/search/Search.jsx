import React, { useState } from 'react'

import styles from './Search.module.scss'

const Search = ({ searchMovies }) => {
  const [query, setQuery] = useState('')

  return <input
    className={styles.search}
    placeholder="Search for movies"
    value={query}
    onChange={e => setQuery(e.target.value)}
    onBlur={() => searchMovies(query)}
  />
}

export default Search

import React, { useCallback, useState } from 'react'

import styles from './Search.module.scss'

const Search = ({ searchMovies }) => {
  const [query, setQuery] = useState('')

  const search = e => {
    e.preventDefault()

    if (query == '') return

    searchMovies(query)
    setQuery('')
  }

  return <form className={styles.search} onSubmit={e => search(e)}>
    <input
      placeholder="Search for movies"
      value={query}
      onChange={e => setQuery(e.target.value)}
    />
    <button type="submit">
      <span class="material-symbols-outlined">search</span>
    </button>
  </form>
}

export default Search

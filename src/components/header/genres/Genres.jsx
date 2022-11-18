import React, { useState, useRef } from 'react'

import useOutsideClick from '../../../hooks/useOutsideClick'
import className from '../../../utils/className'

import styles from './Genres.module.scss'

const Genres = ({ genres_map, selected_genre, selectActiveGenre }) => {
  const [show_more, setShowMore] = useState(false)
  const length_of_visible_genres = 5

  const more = useRef()
  useOutsideClick(more, () => setShowMore(false))

  return <ul className={styles.header__genres} role="list">
    <li
      className={className({
        [styles['header__genres-active']]: selected_genre == null
      })}
      onClick={() => selectActiveGenre(null)}
    >
      All Movies
    </li>
    {
      Object.entries(genres_map)
        .map(([genre_id, genre_name], index) => (
          <li
            key={index}
            className={className({
              [styles['header__genres-active']]: selected_genre == genre_id
            })}
            onClick={() => selectActiveGenre(genre_id)}
          >
            {genre_name}
          </li>
        ))
        .slice(0, length_of_visible_genres)
    }
    <li ref={more} className={styles['header__genres-more']}>
      <span onClick={() => setShowMore(prev => !prev)}>More</span>
      {
        show_more && (
          <ul role="list">
            {
              Object.entries(genres_map)
                .map(([genre_id, genre_name], index) => (
                  <li
                    key={index}
                    className={className({
                      [styles['header__genres-active']]: selected_genre == genre_id
                    })}
                    onClick={() => selectActiveGenre(genre_id)}
                  >
                    {genre_name}
                  </li>
                ))
                .slice(length_of_visible_genres)
            }
          </ul>
        )
      }
    </li>
  </ul>
}

export default Genres

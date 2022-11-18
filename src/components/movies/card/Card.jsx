import React, { useEffect, useRef, useState } from 'react'

import className from '../../../utils/className'

import Details from '../details/Details'

import styles from './Card.module.scss'

const Card = ({ movie, show_details, setShowDetails, genres_map }) => {
  const card = useRef()
  const [details_arrow_position, setDetailsArrowPosition] = useState(0)

  function handleClick () {
    calculateDetailsArrowPosition()

    if (!show_details) {
      setShowDetails()
    }
  }

  function calculateDetailsArrowPosition () {
    const { left, width } = card.current.getBoundingClientRect()
    setDetailsArrowPosition(() => left + width / 2)
  }

  useEffect(() => {
    window.addEventListener('resize', calculateDetailsArrowPosition)
    return () => window.removeEventListener('resize', calculateDetailsArrowPosition)
  }, [])

  return <>
    <li
      ref={card}
      className={className({
        [styles.card]: true,
        [styles.active]: show_details
      })}
      style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})` }}
      onClick={handleClick}
    ></li>
    {
      show_details && (
        <Details movie={movie} arrow_position={details_arrow_position} genres_map={genres_map}/>
      )
    }
  </>
}

export default Card

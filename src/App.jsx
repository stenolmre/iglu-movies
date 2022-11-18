import React from 'react'

import useMovies from './hooks/useMovies'
import useGenres from './hooks/useGenres'

import Header from './components/header/Header'
import Movies from './components/movies/Movies'
import Footer from './components/footer/Footer'

function App() {
  const genres_map = useGenres()
  const movies_props = useMovies()

  return <>
    <Header genres_map={genres_map} { ...movies_props }/>
    <Movies genres_map={genres_map} { ...movies_props }/>
    <Footer />
  </>
}

export default App

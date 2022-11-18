import React from 'react'

import Header from './components/header/Header'
import Movies from './components/movies/Movies'
import Footer from './components/footer/Footer'
import useGenres from './hooks/useGenres'

function App() {
  const { genres_map, genres } = useGenres()

  return <>
    <Header genres={genres}/>
    <Movies genres_map={genres_map} />
    <Footer />
  </>
}

export default App

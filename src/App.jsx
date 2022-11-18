import React from 'react'

import useMovies from './hooks/useMovies'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'

function App() {
  useMovies()
  return <>
    <Header />
    <Footer />
  </>
}

export default App

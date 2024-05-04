import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import GenereMovieList from '../components/GenereMovieList'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <GenereMovieList/>
      <Footer/>
    </div>
  )
}

export default Home

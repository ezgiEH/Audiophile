import React from 'react'
import HomeHero from '../components/HomeHero'
import Categories from '../components/Categories'
import HighlightProducts from '../components/HighlightProducts'
import styled from 'styled-components'
import About from '../components/About'
import Footer from '../components/Footer'

const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5vh;
`

const Home = () => {
  return (
    <Container>
      <HomeHero />
      <Categories />
      <HighlightProducts />
      <About />
      <Footer />
    </Container>
  )
}

export default Home
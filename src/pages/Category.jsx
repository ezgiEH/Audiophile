import React from 'react'
import CategoryHero from '../components/CategoryHero';
import Categories from '../components/Categories'
import About from '../components/About'
import Footer from '../components/Footer'
import styled from 'styled-components';
import CategoryProducts from '../components/CategoryProducts';
import { useParams } from 'react-router-dom';

const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Category = () => {
    const { id } = useParams()

  return (
    <Container>
      <CategoryHero category={`${id}`}/>
      <CategoryProducts category={`${id}`}/>
      <Categories />
      <About />
      <Footer />
    </Container>
  )
}

export default Category
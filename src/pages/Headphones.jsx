import React from 'react'
import data from '../data.json';
import CategoryHero from '../components/CategoryHero';
import Categories from '../components/Categories'
import About from '../components/About'
import Footer from '../components/Footer'

import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Headphones = () => {
  const headphones = data.filter((item) => item.category === 'headphones');
  return (
    <Container>
      <CategoryHero category={"headphones"}/>{
        headphones.map((item) => {
         return <div key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
        </div>
        })
      }
      <Categories />
      <About />
      <Footer />
    </Container>
  )
}

export default Headphones
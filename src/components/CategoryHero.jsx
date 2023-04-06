import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 20vh;
    background: var(--Main-Black);
    display: flex;
    align-items: center;
    justify-content: center;
`
const Header = styled.h2`
    color: var(--Main-White);
    text-transform: uppercase;
    margin: 0;
`
const CategoryHero = ({category}) => {
  return (
    <Container>
        <Header>{category}</Header>
    </Container>
  )
}

export default CategoryHero
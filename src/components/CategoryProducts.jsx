import React from 'react'
import CategoryProduct from './CategoryProduct';
import data from '../data.json';
import { useParams } from 'react-router-dom';
import styled from 'styled-components'


const Container = styled.div`
    width: 100vw;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width: var(--Main-Container-width);
    margin: 10vh 0;
    height: auto;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    gap: 10vh;
`

const CategoryProducts = () => {

  const { id } = useParams()
  const categoryItems = data.filter((item) => item.category === `${id}`);

  return (
    <Container>
      <Wrapper>
        {categoryItems.map(item => {
          return <CategoryProduct key={item.id} item={item} />
        })}
      </Wrapper>
    </Container>
  )
}

export default CategoryProducts
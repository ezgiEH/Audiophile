import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Headphones from '../assets/shared/desktop/image-category-thumbnail-headphones.png'
import Speakers from '../assets/shared/desktop/image-category-thumbnail-speakers.png'
import Earphones from '../assets/shared/desktop/image-category-thumbnail-earphones.png'
import RightArrow from '../assets/shared/desktop/icon-arrow-right.svg'
import { mobile, tablet } from '../responsive'


const Container = styled.div`
    width: 100vw;
    height: auto;
    display: flex;
    align-items: flex-end;
    justify-content: center;
`

const Wrapper = styled.div`
    width: var(--Main-Container-width);  
    margin-top: 10vh; 
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: center;
    gap: 25px;
`

const CategoryItem = styled.div`
   width: 350px;
   height: 284px;
   ${mobile({
    width: "327px",
    height: "217px",
})}
   ${tablet({
    width: "223px",
    height: "125px",
})}
`
const Box = styled.div`
   width: 350px;
   height: 204px;
   background-color: var(--Main-Gray);
   border-radius: var(--Main-border-radius);
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   cursor: pointer;
   ${mobile({
    width: "327px",
    height: "147px",
})}
   ${tablet({
    width: "223px",
    height: "165px",
})}
`
const Image = styled.img`
    margin-top: -80px;
    height: 160px;
    object-fit: cover;
    &:hover{
        transform: scale(1.2);
    }
    ${mobile({
    height: "124px",
    marginTop: "-60px",
})}
`


const Header = styled.h6`
    margin: 10px 0;
    color: var(--Main-Black);
    text-transform: uppercase;
    ${mobile({
    margin: "0",
})}
`
const Span = styled.span`
    width: 70px;
    text-transform: uppercase;
    font-weight: 700;
    color: var(--Main-Black);
    opacity: .5;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const Categories = () => {
    return (
        <Container>
            <Wrapper>
                <CategoryItem>
                    <Link to="/category/headphones">
                        <Box>
                            <Image src={Headphones}></Image>
                            <Header>Headphones</Header>
                            <Span>Shop <img src={RightArrow} alt="shop" /></Span>
                        </Box>
                    </Link>
                </CategoryItem>
                <CategoryItem>
                    <Link to="/category/speakers">
                        <Box>
                            <Image src={Speakers}></Image>
                            <Header>Speakers</Header>
                            <Span>Shop<img src={RightArrow} alt="shop" /></Span>
                        </Box>
                    </Link>
                </CategoryItem>
                <CategoryItem>
                    <Link to="/category/earphones">
                        <Box>
                            <Image src={Earphones}></Image>
                            <Header>Earphones</Header>
                            <Span>Shop<img src={RightArrow} alt="shop" /></Span>
                        </Box>
                    </Link>
                </CategoryItem>
            </Wrapper>
        </Container>
    )
}

export default Categories
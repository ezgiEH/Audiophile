import React from 'react'
import styled from 'styled-components'
import HeroImage from '../assets/home/desktop/image-hero.jpg'
import HeroImageMobile from '../assets/home/mobile/image-header.jpg'
import {mobile, tablet} from '../responsive'
import { Link } from 'react-router-dom'

const Container = styled.div`
    width: 100vw;
    height: 80vh;
    background-image: url(${HeroImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: var(--Main-White);
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom-left-radius: var(--Main-border-radius);
    border-bottom-right-radius: var(--Main-border-radius);
    ${mobile({
        backgroundImage: `url(${HeroImageMobile})`,
        backgroundPosition: "bottom",
        height: "60vh",
    })}
`
const Wrapper = styled.div`
    width: 80vw;
    height: 100%;
    display: flex;
    align-items: center;
    ${mobile({
       justifyContent: "center",
    })}
`
const InfoSection = styled.div`
    flex: 1;
    ${mobile({
       width: "90vw",
       textAlign: "center",
       display: "flex",
       flexDirection:"column",
       alignItems: "center",
       justifyContent: "center",
    })}
`
const Overline = styled.p`
    text-transform: uppercase;
    font-size: var(--Overline-Fontsize);
    line-height: var( --Overline-Linepace);
    letter-spacing: var( --Overline-Char);
`
const Header = styled.h1`
    text-transform: uppercase;
    font-size: var(--H1-Fontsize);
    line-height: var( --H1-Linepace);
    letter-spacing: var( --H1-Char);
    ${mobile({
        fontSize: "var(--H2-Fontsize)",
        lineHeight: "var( --H2-Linepace)",
        letterSpacing: "var( --H2-Char)",
    })}
`
const Text = styled.p`
    color: var(--Main-Gray);
    font-size: var( --Text-Fontsize);
    line-height: var(--Text-Linespace);
    
`
const Button = styled.button`
    padding: 16px 36px;
    border: none;
    background-color: var(--Main-Orange);
    color: var(--Main-White);
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;
`

const ImageSection = styled.div`
    flex: 2;
    ${mobile({
        display: "none",
    })}
`

const HomeHero = () => {
  return (
    <Container>
        <Wrapper>
            <InfoSection>
                <Overline>New Product</Overline>
                <Header>XX99 Mark II Headphones</Header>
                <Text>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</Text>
                <Button><Link to="/products/4">See Product</Link></Button>
            </InfoSection>
            <ImageSection>
            </ImageSection>
        </Wrapper>
    </Container>
  )
}

export default HomeHero
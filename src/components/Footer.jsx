import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Facebook from '../assets/shared/desktop/icon-facebook.svg'
import Instagram from '../assets/shared/desktop/icon-instagram.svg'
import Twitter from '../assets/shared/desktop/icon-twitter.svg'


const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: var(--Main-Black);
`
const Wrapper = styled.div`
    width: 80vw;
    height: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--Main-White);
    gap: 5vh;
`
const FooterMenu = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Logo = styled.h4`
    line-height: 10vh;
    border-top: 5px solid var(--Main-Orange);
    margin: 0;
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 2vw;
`


const FooterContent = styled.div`
    display: flex;
    align-items: center;
`
const Text = styled.p`
    flex: 1;
`
const Social = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 2vw;
`
const SocialLink = styled.a`
    
`




const Footer = () => {
  return (
    <Container>
        <Wrapper>
            <FooterMenu>
                <Logo>audophile</Logo>
                <Menu>
                    <Link to="/" className='menu'>Home</Link>
                    <Link to="/category/headphones" className='menu'>Headphones</Link>
                    <Link to="/category/speakers" className='menu'>Speakers</Link>
                    <Link to="/category/earphones" className='menu'>Earphones</Link>
                </Menu>
            </FooterMenu>
            <FooterContent>
            <Text>Audiophile is an all in one stop to 
                fulfill your audio needs. We're a small
                 team of music lovers and sound specialists 
                 who are devoted to helping you get the most 
                 out of personal audio. Come and visit our demo 
                 facility - we're open 7 days a week.</Text>
            <Social>
                <SocialLink><img src={Facebook} alt='facebook'></img></SocialLink>
                <SocialLink><img src={Twitter} alt="twitter"></img></SocialLink>
                <SocialLink><img src={Instagram} alt="instagram"></img></SocialLink>
            </Social>
            </FooterContent>
            <Text >Copyright 2021. All Rights Reserved</Text>
        </Wrapper>
    </Container>
  )
}

export default Footer
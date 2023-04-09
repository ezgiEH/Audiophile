import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ZX9 from '../assets/home/desktop/image-speaker-zx9.png'
import ZX7 from '../assets/home/mobile/image-speaker-zx7.jpg'
import YX1 from '../assets/home/desktop/image-earphones-yx1.jpg'
import {mobile, tablet} from '../responsive'

const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 80vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 5vh;
`
const BigProduct = styled.div`
    width: 100%;
    height: 50vh;
    background: var(--Main-Orange) url("../assets/home/desktop/pattern-circles.svg");
    background-position: top left;
    background-size: 50vw;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--Main-border-radius);
    overflow: hidden;
    ${mobile({
        backgroundPosition: "top",
        backgroundSize: "80vw",
        height: "65vh",
        flexDirection: "column",
        
    })}
`

const SecondProduct = styled.div`
    width: 100%;
    height: 30vh;
    background: url("../assets/home/desktop/image-speaker-zx7.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: right;
    border-radius: var(--Main-border-radius);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    ${mobile({
        background: `url(${ZX7})`,
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
        backgroundSize: "55vh",
        height: "50vh",
    })}
`
const SmallProducts = styled.div`
    width: 100%;
    height: 30vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 5vw;
    ${mobile({
        flexDirection: "column",
        height: "50vh",
    })}
`
const SmallProduct = styled.div`
    width: 50%;
    height: 30vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    background: var(--Main-Gray);
    border-radius: var(--Main-border-radius);
    overflow: hidden;
    ${mobile({
        width: "100%",
    })}
`
const SmallImage = styled.img`
    width: 100%;
    height: 100%;
`

const ImageSection = styled.div`
    flex: 1.5;
    position: relative;
`
const Image = styled.img`
    width: 20vw;
    position: absolute;
    top: -13vh;
    left: 15vw;
    ${mobile({
        width: "40vw",
        top: "30%",
        left: "-18vw",
    })}
`
const ContentSection = styled.div`
    width: 350px;
    padding: 0 110px;
    ${mobile({
        width: "70vw",
        padding: "5vw",
        textAlign: `${props => props.big ? "center" : "left" }`,
    })}
`

const Header = styled.h1`
    color: var(--Main-White);
    margin: 25px 0;
    text-transform: uppercase;
   
`
const HeaderTwo = styled.h2`
    color: var(--Main-Black);
    margin: 25px 0;
    text-transform: uppercase;
`
const Text = styled.p`
    color: var(--Second-White);
`
const Button = styled.a`
    padding: 8px 32px;
    border: none;
    border: 1px solid var(--Main-Black);
    background-color: ${props => props.$primary ? "var(--Main-Black)" : "transparent"};
    color: ${props => props.$primary ? "var(--Main-White)" : "var(--Main-Black)"};;
    text-transform: uppercase;
    cursor: pointer;
`

const HighlightProducts = () => {
    return (
        <Container>
            <Wrapper>
                <BigProduct>
                    <ImageSection>
                        <Image src={ZX9}></Image>
                    </ImageSection>
                    <ContentSection big>
                        <Header>Zx9 Speaker</Header>
                        <Text>Upgrade to premium speakers that are
                            phenomenally built to deliver truly remarkable sound.</Text>
                        <Button $primary>See Product</Button>
                    </ContentSection>
                </BigProduct>
                <SecondProduct>
                    <ContentSection>
                        <HeaderTwo>ZX7 SPEAKER</HeaderTwo>
                        <Button>See Product</Button>
                    </ContentSection>
                </SecondProduct>
                <SmallProducts>
                    <SmallProduct>
                        <SmallImage src={YX1}></SmallImage>
                    </SmallProduct>
                    <SmallProduct>
                        <ContentSection>
                            <HeaderTwo >Yx1 Earphones</HeaderTwo>
                            <Button>See Product</Button>
                        </ContentSection>
                    </SmallProduct>
                </SmallProducts>
            </Wrapper>
        </Container>
    )
}

export default HighlightProducts
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ZX9 from '../assets/home/desktop/image-speaker-zx9.png'
import ZX7 from '../assets/home/desktop/image-speaker-zx7.jpg'
import YX1 from '../assets/home/desktop/image-earphones-yx1.jpg'

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
`

const SecondProduct = styled.div`
    width: 100%;
    height: 30vh;
    background: url("../assets/home/desktop/image-speaker-zx7.jpg");
    background-size: cover;
    background-rrepeat: no-repeat;
    backgroun-posiiton: right;
    border-radius: var(--Main-border-radius);
    display: flex;
    align-items: center;
    justify-content: flex-start;
`
const SmallProducts = styled.div`
    width: 100%;
    height: 30vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 5vw;
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
`
const SmallImage = styled.img`
    width: 100%;
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
`
const ContentSection = styled.div`
    width: 350px;
    padding: 0 110px;
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
                    <ContentSection>
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
                            <HeaderTwo>Yx1 Earphones</HeaderTwo>
                            <Button>See Product</Button>
                        </ContentSection>
                    </SmallProduct>
                </SmallProducts>
            </Wrapper>
        </Container>
    )
}

export default HighlightProducts
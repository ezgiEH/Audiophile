import React from 'react'
import styled from 'styled-components'
import AboutImage from '../assets/shared/desktop/image-best-gear.jpg'
import { mobile, tablet } from '../responsive'

const Container = styled.div`
    width: 100vw;
    margin: 10vh 0;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width: var(--Main-Container-width);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5vw;
    ${mobile({
    flexDirection: "column-reverse",
})}
`
const ContentSection = styled.div`
    flex: 1;
    ${mobile({
    width: "80vw",
    textAlign: "center",
})}
`
const Header = styled.h2`
    text-transform: uppercase;
    padding-right: 110px;
    ${mobile({
    paddingRight: "0px",
    fontSize: "28px",
    lineHeight: "28px",
})}
`
const Span = styled.span`
    color: var(--Main-Orange);
`
const Text = styled.p`
    line-height:var(--Subtitle-Linepace);
    padding-right: 55px;
    ${mobile({
    paddingRight: "0px",
})}
`
const ImageSection = styled.div`
    flex: 1;
    border-radius: var(--Main-border-radius);
    overflow: hidden;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--Main-border-radius);
    ${mobile({
    width: "327px",
    height: "300px",
})}
`

const About = () => {
    return (
        <Container>
            <Wrapper>
                <ContentSection>
                    <Header>Bringing you the <Span>best</Span> audio gear</Header>
                    <Text>Located at the heart of New York City,
                        Audiophile is the premier store for high end
                        headphones, earphones, speakers, and audio accessories.
                        We have a large showroom and luxury demonstration rooms
                        available for you to browse and experience a wide range
                        of our products. Stop by our store to meet some of the
                        fantastic people who make Audiophile the best place to
                        buy your portable audio equipment.</Text>
                </ContentSection>
                <ImageSection>
                    <Image src={AboutImage}></Image>
                </ImageSection>
            </Wrapper>
        </Container>
    )
}

export default About
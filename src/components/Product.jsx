import React from 'react'
import data from '../data.json'
import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 80vw;
    margin: 10vh 0;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const ProductBox = styled.div`
    width: 100%;
    height: 560px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const ImageSection = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 540px;
    height: 560px;
    object-fit: contain;
    border-radius: var(--Main-border-radius);
    cursor: crosshair;
`
const InfoSection = styled.div`
    flex: 1;
    padding: 80px;
`
const Span = styled.span`
    text-transform: uppercase;
    letter-spacing: 10px;
    font-weight: 400;
    color: var(--Main-Orange)
`

const Header = styled.h1`
    margin: 24px 0;
    text-transform: uppercase;
`

const Text = styled.p`
    line-height: 25px;
    opacity: .6;
`

const Price = styled.span`
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 1.29px;
`

const Buttons = styled.div`
    margin-top: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const AmountContainer = styled.div`
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: 700;
    background-color: var(--Main-Gray);
    border-radius: var(--Main-border-radius);
    overflow: hidden;
`
const Amount = styled.span`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`

const AmountButton = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover{
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        color: var(--Main-Orange);
    }
`


const AddButton = styled.button`
    padding: 16px 30px;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 1px;
    border: none;
    background-color: var(--Main-Orange);
    color: var(--Main-White);
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    cursor: pointer;
`
const FeaturesBox = styled.div`
    margin: 5vh 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Features = styled.div`
    flex: 1.2;
`

const InTheBox = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
        
`

const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

const ItemSpan = styled.span`
    color: var(--Main-Orange);
    font-weight: 700;
    margin-right: 16px;
`

const ImageBox = styled.div`
    width: 100%;
    height: auto;
    margin: 5vh 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
    cursor: crosshair;
`

const LeftColumn = styled.div`
    width: 445px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 32px;
    overflow: hidden;
`

const First = styled.div`
    flex: 1;
`
const Second = styled.div`
    flex: 1;
`
const Third = styled.div`
    overflow: hidden;
`

const GalleryImage = styled.img`
    border-radius: var(--Main-border-radius);
    &:hover{
        opacity: .8;
    }
`


const Product = ({ id }) => {
    const product = data[id - 1]

    return (
        <Container>
            <Wrapper>
                <ProductBox>
                    <ImageSection>
                        <Image src={product.image.desktop}></Image>
                    </ImageSection>
                    <InfoSection>
                        <Span>{product.new === true ? "New Product" : ""}</Span>
                        <Header>{product.name}</Header>
                        <Text>{product.description}</Text>
                        <Price>${product.price}</Price>
                        <Buttons>
                            <AmountContainer>
                                <AmountButton>-</AmountButton>
                                <Amount>1</Amount>
                                <AmountButton>+</AmountButton>
                            </AmountContainer>
                            <AddButton>ADD TO CART</AddButton>
                    </Buttons>
                </InfoSection>
            </ProductBox>
            <FeaturesBox>
                <Features>
                    <Header as={"h3"}>Features</Header>
                    <Text>{product.features}</Text>
                </Features>
                <InTheBox>
                    <Header as={"h3"}>In the Box</Header>
                    <div>
                        {product.includes.map(item => {
                            return <Item>
                                <ItemSpan>{item.quantity}X</ItemSpan>
                                <Text>{item.item}</Text>
                            </Item>
                        })}
                    </div>
                </InTheBox>
            </FeaturesBox>
            <ImageBox>
                <LeftColumn>
                    <First>
                        <GalleryImage src={product.gallery.first.desktop}></GalleryImage>
                    </First>
                    <Second>
                        <GalleryImage src={product.gallery.second.desktop}></GalleryImage>
                    </Second>
                </LeftColumn>
                <Third>
                    <GalleryImage src={product.gallery.third.desktop}></GalleryImage>
                </Third>
            </ImageBox>
        </Wrapper>
        </Container >
    )
}

export default Product
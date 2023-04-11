import React, { useState } from 'react'
import data from '../data.json'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { addProduct } from '../redux/CartRedux'
import { mobile, tablet } from '../responsive'
import { useNavigate } from 'react-router-dom'

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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ${mobile({
    marginTop: "0px",
})}
`
const ProductBox = styled.div`
    width: 100%;
    height: 560px;
    display: flex;
    align-items: center;
    justify-content: center;
    ${mobile({
    flexDirection: "column",
    height: "auto",
})}
`
const ImageSection = styled.div`
    flex: 1;
    ${mobile({
    width: "327px",
    height: "352px",
    borderRadius: "var(--Main-border-radius)"
})}
`
const Image = styled.img`
    width: 540px;
    height: 560px;
    object-fit: contain;
    border-radius: var(--Main-border-radius);
    cursor: crosshair;
    ${mobile({
    width: "100%",
    height: "100%",
    borderRadius: "var(--Main-border-radius)"
})}
`
const InfoSection = styled.div`
    flex: 1;
    padding: 80px;
    ${mobile({
    width: "80vw",
    padding: "32px"
})}
`
const Span = styled.span`
    text-transform: uppercase;
    letter-spacing: 10px;
    font-weight: 400;
    color: var(--Main-Orange);
`

const Header = styled.h1`
    margin: 24px 0;
    text-transform: uppercase;
    ${mobile({
    fontSize: "28px",
    lineHeight: "28px"
})}
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
    justify-content: flex-start;
    gap: 32px;
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
        box-shadow: var(--Box-Shadow);
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
    box-shadow: var(--Box-Shadow);
    cursor: pointer;
    transition: 0.25s;
    &:hover{
        box-shadow: inset 0 0 0 2em var(--Main-Gray);
        color: var(--Main-Orange);
    }
`
const FeaturesBox = styled.div`
    margin: 5vh 0;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    ${mobile({
    flexDirection: "column",
    height: "auto",
    width:"80vw",
})}
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
    width: var(--Main-Container-width);
    height: auto;
    margin: 5vh 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: crosshair;
    ${mobile({
    width: "80vw",
    flexDirection: "column",
})}
`

const LeftColumn = styled.div`
    width: 445px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    overflow: hidden;
    gap: 32px;
    ${mobile({
    width: "80vw",
    flexDirection: "column",
    gap: "8px",
})}
`

const First = styled.div`
    flex: 1;
`
const Second = styled.div`
    flex: 1;
`
const Third = styled.div`
    overflow: hidden;
    ${mobile({
    width: "80vw",
})}
`

const GalleryImage = styled.img`
    border-radius: var(--Main-border-radius);
    &:hover{
        opacity: .8;
    }
    ${mobile({
    width: "100%",
    flexDirection: "column",
})}
`
const LikeBox = styled.div`
    margin: 5vh 0 ;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;
    ${mobile({
    position:"relative",
    width: "100vw",
    overflow:"hidden",
})}
`
const ItemContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
     ${mobile({
    width: "90%",
    // flexDirection: "column",
    justifyContent:"center",
    left:"0",
    overflowX: "scroll",
    scrollBehavior: "smooth",
    webkitOverflowScrolling: "touch",
})}
`

const BoxItem = styled.div`
    margin: 32px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ${mobile({
})}
`
const BoxImage = styled.img`
    width: 350px;
    height: 318px;
    object-fit: contain;
    border-radius: var(--Main-border-radius);
    ${mobile({
    width: "260px",
    height: "120px",
    background: "var(--Main-Gray)",
})}
`
const BoxButton = styled.a`
    padding: 12px 28px;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 1px;
    border: none;
    background-color: var(--Main-Orange);
    color: var(--Main-White);
    box-shadow: var(--Box-Shadow);
    cursor: pointer;
    transition: 0.25s;
    &:hover{
        box-shadow: inset 0 0 0 2em var(--Main-Gray);
        color: var(--Main-Orange);
    }
`

const GoBackButton = styled.button`
    background: transparent;
    border: none;
    align-self: flex-start;
    color: var(--Line-Gray);
    text-decoration: underline;
    text-align: left;
    cursor: pointer;
    margin: 32px 0;
`



const Product = ({ id }) => {
    const product = data[id - 1]
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()


    const handleQuantity = (type) => {
        if (type === "dec") {
            quantity > 1 && setQuantity(quantity - 1)
        }
        else {
            setQuantity(quantity + 1)
        }
    }

    const handleClick = () => {
        dispatch(addProduct({ id: nanoid(), ...product,  quantity }))
    }

    const navigate = useNavigate()

    return (
        <Container>
            <Wrapper>
                <GoBackButton onClick={() => navigate(-1)}>Go Back</GoBackButton>
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
                                <AmountButton onClick={() => handleQuantity("dec")}>-</AmountButton>
                                <Amount>{quantity}</Amount>
                                <AmountButton onClick={() => handleQuantity("inc")}>+</AmountButton>
                            </AmountContainer>
                            <AddButton onClick={() => handleClick()}>ADD TO CART</AddButton>
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
                <LikeBox>
                    <Header as={"h2"}>you may also like</Header>
                    <ItemContainer>
                        {
                            product.others.map(item => {
                                return <BoxItem key={item.name}>
                                    <BoxImage src={item.image.desktop}></BoxImage>
                                    <Header as={"h3"}>{item.name}</Header>
                                    <BoxButton>See Product</BoxButton>
                                </BoxItem>
                            })
                        }
                    </ItemContainer>
                </LikeBox>
            </Wrapper>
        </Container >
    )
}

export default Product
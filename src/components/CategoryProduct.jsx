import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {mobile, tablet} from '../responsive'


const ItemBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    &:nth-child(even){
        flex-direction: row-reverse;
        ${mobile({
        flexDirection: "column",
    })}
    }
    ${mobile({
        flexDirection: "column",
    })}
`
const ImageSection = styled.div`
    flex: 1;
    width: 540px;
    height: 560px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Image = styled.img`
    width: 540px;
    height: 560px;
    object-fit: fill;
    border-radius: var(--Main-border-radius);
    ${mobile({
        width: "327px",
        height: "352px"
    })}
`
const InfoSection = styled.div`
    flex: 1;
    padding: 70px;
    height: 420px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    ${mobile({
        alignItems: "center",
        textAlign:"center",
        width:"90vw",
        padding: "32px"
    })}
`
const Span = styled.span`
    text-transform: uppercase;
    color: var(--Main-Orange);
    letter-spacing: 10px;
`
const Header = styled.p`
    margin: 16px 0;
    font-size: 48px;
    line-height: 54px;
    letter-spacing: 1.43px;
    font-weight: 700;
    text-transform: uppercase;
`
const Text = styled.p`
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    opacity: .6;
`
const Button = styled.a`
    margin-top: 16px;
    padding: 12px 28px;
    border: 1px solid var(--Main-Orange);
    background-color: var(--Main-Orange);
    color: var(--Main-White);
    text-transform: uppercase;
    font-weight: 700;
    box-shadow: var(--Box-Shadow);
    cursor: pointer;
`


const CategoryProduct = ({ item }) => {
    return (
        <ItemBox>
            <ImageSection>
                <Image src={item.categoryImage.desktop} alt={item.name}></Image>
            </ImageSection>
            <InfoSection>
                <Span>{item.new === true ? "New Product" : ""}</Span>
                <Header>{item.name}</Header>
                <Text>{item.description}</Text>
                <Button><Link to={`/products/${item.id}`}>See Product</Link></Button>
            </InfoSection>
        </ItemBox>
    )
}

export default CategoryProduct
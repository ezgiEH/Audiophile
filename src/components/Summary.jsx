import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Container = styled.div`
    width: 20vw;
    padding: 32px;
    background-color: var(--Main-White);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 32px;
    border-radius: var(--Main-border-radius);
    box-shadow: var(--Box-shadow);
`
const Header = styled.h3`
    margin: 16px 0;
`
const SummaryItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
`

const Item = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
`

const Image = styled.img`
    width: 64px;
    height: 64px;
    border-radius: var(--Main-border-radius);
    box-shadow: var(--Box-shadow);
`
const Info = styled.div`
    width:calc(22vw - 148px) ;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

`
const Text = styled.p`
    margin: 2px 0;
    font-weight: ${props => props.bold ? 700 : 400};
    font-size: ${props => props.bold ? "18px" : "16px"};
    color: ${props => props.primary? "var(--Main-Orange)" : "var(--Main-Black)"};
`
const Amount = styled.span`
    font-weight: 700;
`
const PriceBox = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const PayButton = styled.button`
    width: 100%;
    padding: 16px;
    background-color: var(--Main-Orange);
    color: var(--Main-White);
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 2px;
    border: none;
    box-shadow: var(--Box-shadow);
    cursor: pointer;
`



const Summary = () => {

    const items = useSelector(state => state.cart.products)
    const total = useSelector(state => state.cart.total)
  return (
    <Container>
        <Header>Summary</Header>
        <SummaryItems>
            {
                items.map(item => {
                    return <Item key={item.id}>
                    <Image src={item.image.mobile}></Image>
                    <Info>
                        <Text bold>{item.name.split(" ", 1)}</Text>
                        <Text>${item.price}</Text>
                    </Info>
                    <Amount>x{item.quantity}</Amount>
                </Item>
                })
            }
            
        </SummaryItems>
        <PriceBox>
            <Text>TOTAL</Text>
            <Text bold>${total}</Text>
        </PriceBox>
        <PriceBox>
            <Text>SHIPPING</Text>
            <Text bold>$50</Text>
        </PriceBox>
        <PriceBox>
            <Text>GRAND TOTAL</Text>
            <Text bold primary>${total + 50}</Text>
        </PriceBox>
        <PayButton>Continue & Pay</PayButton>
    </Container>
  )
}

export default Summary
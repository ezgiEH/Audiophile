import React from 'react'
import styled from 'styled-components'
import Ok from '../assets/checkout/icon-order-confirmation.svg'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeAllProduct } from '../redux/CartRedux'
import { mobile } from '../responsive'


const ModalContainer = styled.div`
    width: 100vw;
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;

`

const Container = styled.div`
    width: 500px;
    height: 500px;
    background: var(--Main-White);
    border-radius: var(--Main-border-radius);
    box-shadow: var(--Box-Shadow);
    padding: 32px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 32px;
    ${mobile({
  width: "80vw",
})}
`

const Icon = styled.img``

const Header = styled.p`
  margin: 0;
  font-size: 32px;
  line-height: 36px;
  letter-spacing: 1.14px;
  font-weight: 700;
`
const Text = styled.p`
  margin: 0;
  font-weight: ${props => props.bold ? "700" : "500"};
  color: ${props => props.white ? "var(--Main-White)" : "var(--Main-Black)"};
`
const OrderContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--Main-Gray);
  border-radius: var(--Main-border-radius);
  box-shadow: var(--Box-Shadow);
  ${mobile({
  flexDirection: "column",
})}
`
const OrderBox = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  gap: 16px;
  ${mobile({
  width: "80%",
})}
`
const Item = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  border-bottom: 1px solid var(--Line-Gray);
`
const Image = styled.img`
  width: 48px;
  height: 48px;
  object-fit: fill;
`
const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const TotalBox = styled.div`
  flex: 1.5;
  height: 100%;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background: var(--Main-Black);
  border-radius: var(--Main-border-radius);
  gap: 8px;
  ${mobile({
  width: "calc(80vw - 32px)",
  flexDirection: "row",
  justifyContent: "space-between",
  borderRadius: "0",
  borderBottomLeftRadius: "var(--Main-border-radius)",
  borderBottomRightRadius: "var(--Main-border-radius)",
})}
`

const Button = styled.button`
    width: 100%;
    padding: 16px;
    background-color: var(--Main-Orange);
    color: var(--Main-White);
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 2px;
    border: none;
    box-shadow: var(--Box-Shadow);
    cursor: pointer;
`


const OrderModal = () => {
  const dispatch = useDispatch()

  const order = useSelector(state => state.cart.order.orderedProduct)
  const total = useSelector(state => state.cart.total)

  const handleClick = () => {
    dispatch(removeAllProduct())
  }

  return (
    <ModalContainer>
      <Container>
        <Icon src={Ok}></Icon>
        <Header>THANK YOU <br />FOR YOUR ORDER</Header>
        <Text>You will receive an email confirmation shortly.</Text>
        <OrderContainer>
          <OrderBox>
            <Item>
              <Image src={order[0].image.mobile} />
              <Info>
                <Text bold>{order[0].name.split(" ", 2).join(" ")}</Text>
                <Text>$ {order[0].price}</Text>
              </Info>
              <Text>x {order[0].quantity}</Text>
            </Item>
            <Text>and {order.length - 1} other item(s)</Text>
          </OrderBox>
          <TotalBox>
            <Text white>GRAND TOTAL</Text>
            <Text bold white>$ {total + 50}</Text>
          </TotalBox>
        </OrderContainer>
        <Button onClick={() => handleClick()}><Link to="/">Back to Home</Link></Button>
      </Container>
    </ModalContainer>
  )
}

export default OrderModal
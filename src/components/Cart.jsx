import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { removeAllProduct } from '../redux/CartRedux'
import { Link } from 'react-router-dom'

const Container = styled.div`
    color: var(--Main-Black);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 16px;
`
const CartHeader = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Header = styled.h6`
    margin: 0;
    
`
const Remove = styled.button`
    background: transparent;
    border: none;
    font-size: 14px;
    opacity: .8;
    text-decoration: underline;
    cursor: pointer;
`
const CartItemList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`
const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 16px;
`

const Image = styled.img`
    width: 64px;
    height: 64px;
    border-radius: var(--Main-border-radius);
`
const ItemInfo = styled.div`
    width: calc(24vw - 176px);
`
const ItemHeader = styled.p`
    margin: 0;
    font-weight: 700;
`

const Text = styled.p`
    margin: 0;
    font-size: ${props => props.bold ? "18px" : "14px"};
    font-weight: ${props => props.bold ? 700 : 400};
`

const AmountContainer = styled.div`
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: 700;
    background-color: var(--Main-Gray);
    border-radius: var(--Main-border-radius);
    overflow: hidden;

`
const Amount = styled.span`
    width: 30px;
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

const CartButton = styled.a`
    width: 100%;
    padding: 8px 0;
    text-align: center;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 1px;
    border: none;
    background-color: var(--Main-Orange);
    color: var(--Main-White);
    box-shadow: var(--Box-Shadow);
    cursor: pointer;
`
const TotalPrice = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Cart = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cart)
    const total = useSelector(state => state.cart.total)
    const [quantity, setQuantity] = useState()

    const handleQuantity = (type) => {
        if (type === "dec") {
            quantity > 1 && setQuantity(quantity - 1)
        }
        else {
            setQuantity(quantity + 1)
        }
    }

    const handleRemove= () =>{
        dispatch(removeAllProduct())
    }

return (
    <Container>
        <CartHeader>
            <Header>Cart ({cartItems.quantity})</Header>
            <Remove onClick={() => handleRemove()}>Remove All</Remove>
        </CartHeader>
        <CartItemList>
            {
                cartItems.products.map(item => {
                    return <Item key={item.index}>
                        <Image src={item.image.mobile}></Image>
                        <ItemInfo>
                            <ItemHeader>{item.name}</ItemHeader>
                            <Text>${item.price}</Text>
                        </ItemInfo>
                        <AmountContainer>
                                <AmountButton onClick={() => handleQuantity("dec")}>-</AmountButton>
                                    <Amount>{item.quantity}</Amount>
                                <AmountButton onClick={() => handleQuantity("inc")}>+</AmountButton>
                        </AmountContainer>
                    </Item>
                })
            }
            <TotalPrice>
                <Text>TOTAL</Text>
                <Text bold>{total > 0 && `$ ${total}`}</Text>
            </TotalPrice>
        </CartItemList>
        <CartButton>
           <Link to="/checkout">Checkout</Link> 
        </CartButton>
    </Container>
  )
}

export default Cart
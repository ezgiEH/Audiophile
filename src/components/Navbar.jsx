import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import CartIcon from '../assets/shared/desktop/icon-cart.svg'
import Cart from './Cart'

const Container = styled.div`
    width: 100vw;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--Main-Black);
    color: var(--Main-White);
`

const Wrapper = styled.div`
    width: 80vw;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid var(--Main-Gray);
`

const Logo = styled.div`
    flex: 1;
`
const H1 = styled.h3`
    
`
const Menu = styled.div`
    flex: 3;
    display: flex;
    align-items: center;
    justify-content: center;
`
const MenuItem = styled.a`
    width: 8vw;
    text-align: center;
    text-transform: uppercase;
    font-size: var(--Subtitle-Fontsize);
    line-height: var(--Subtitle-Linespace);
    letter-spacing: var(--Subtitle-Char);
    color: var(--Main-White);
    cursor: pointer;
`

const CartContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: relative;
`
const CartButton = styled.button`
    background: transparent;
    border: none;
    width: 25px;
    height: 20px;
`
const CartModal = styled.div`
    position: absolute;
    padding: 24px;
    width: 24vw;
    min-height: 10vh;
    top: 4vh;
    background: var(--Main-White);
    border-radius: var(--Main-border-radius);
    box-shadow: var(--Box-Shadow);
    z-index: 2;
`
const Navbar = () => {
    const [open, setOpen] = useState("none")

    const handleClick = () =>{
        open === "none" ? setOpen("block") : setOpen("none")
    }

  return (
    <Container>
        <Wrapper>
           <Logo>
            <H1>audophile</H1>
           </Logo>
           <Menu>
            <MenuItem><Link to="/" className='menu'>Home</Link></MenuItem>
            <MenuItem><Link to="/category/headphones" className='menu'>Headphones</Link></MenuItem>
            <MenuItem><Link to="/category/speakers" className='menu'>Speakers</Link></MenuItem>
            <MenuItem><Link to="/category/earphones" className='menu'>Earphones</Link></MenuItem>
           </Menu>
           <CartContainer>
            <CartButton onClick={() => handleClick()}>
                <img src={CartIcon} alt="cart"/>
            </CartButton>
            <CartModal style={{display: `${open}`}}>
                <Cart />
            </CartModal>
           </CartContainer>
        </Wrapper>
    </Container>
  )
}

export default Navbar
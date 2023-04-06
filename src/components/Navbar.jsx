import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import CartIcon from '../assets/shared/desktop/icon-cart.svg'

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

const Cart = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const Navbar = () => {
  return (
    <Container>
        <Wrapper>
           <Logo>
            <H1>audophile</H1>
           </Logo>
           <Menu>
            <MenuItem><Link to="/" className='menu'>Home</Link></MenuItem>
            <MenuItem><Link to="/headphones" className='menu'>Headphones</Link></MenuItem>
            <MenuItem><Link to="/speakers" className='menu'>Speakers</Link></MenuItem>
            <MenuItem><Link to="/earphones" className='menu'>Earphones</Link></MenuItem>
           </Menu>
           <Cart>
            <img src={CartIcon} alt="cart"/>
           </Cart>
        </Wrapper>
    </Container>
  )
}

export default Navbar
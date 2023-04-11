import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import CartIcon from '../assets/shared/desktop/icon-cart.svg'
import Cart from './Cart'
import MobileMenu from '../assets/shared/tablet/icon-hamburger.svg'
import { useSelector } from 'react-redux'
import { mobile, tablet } from '../responsive'
import Categories from './Categories'


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
    width: var(--Main-Container-width);
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid var(--Main-Gray);
    ${mobile({
    width: "100vw",
    padding: "0 32px",
    position: "relative",
})}
`

const Logo = styled.div`
    flex: 1;
`
const Header = styled.h3`
    margin: 0;
`
const Menu = styled.div`
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 32px;
    ${mobile({
    display: "none",
})}
`
const MenuItem = styled.a`
    height: 100%;
    text-align: center;
    text-transform: uppercase;
    font-size: var(--Subtitle-Fontsize);
    line-height: var(--Subtitle-Linespace);
    letter-spacing: var(--Subtitle-Char);
    color: var(--Main-White);
    cursor: pointer;
    &:hover{
        color: var(--Main-Orange);
    }
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
    cursor: pointer;
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
    ${mobile({
    width: "80vw",
    right: "-3.5vw",
})}
`

const Badge = styled.span`
    background: var(--Main-Orange);
    color: var(--Main-White);
    padding: 0 8px;
    border-radius: 50%;
    position: absolute;
    right: -20px;
    top: -10px;
`

const MobileMenuContainer = styled.div`
    display: none;
    height: 100%;
    background: rgba(1, 1 , 1, .5);
    flex: 1;
    ${mobile({
    display: "flex",
})}
`

const MenuButton = styled.button`
    background: transparent;
    border: none;
`

const HamburgerMenu = styled.div`
    position: absolute;
    width: 100%;
    top: 10vh;
    left: 0;
    background-color: var(--Main-White);
    box-shadow: var(--Box-Shadow);
    border-bottom-left-radius: var(--Main-border-radius);
    border-bottom-right-radius: var(--Main-border-radius);
    z-index: 2;
`


const Navbar = () => {
    const badge = useSelector(state => state.cart.quantity)
    const [open, setOpen] = useState("none")
    const [menuOpen, setMenuOpen] = useState("none")


    const handleClick = () => {
        open === "none" ? setOpen("block") : setOpen("none")
    }
    const handleMenuClick = () => {
        menuOpen === "none" ? setMenuOpen("flex") : setMenuOpen("none")
    }

    return (
        <Container>
            <Wrapper>
                <MobileMenuContainer >
                    <MenuButton onClick={() => handleMenuClick()}>
                        <img src={MobileMenu} alt='icon'></img>
                    </MenuButton>
                    <HamburgerMenu style={{ display: `${menuOpen}` }}>
                        <Categories />
                    </HamburgerMenu>
                </MobileMenuContainer>
                <Logo>
                    <Header>audiophile</Header>
                </Logo>
                <Menu>
                    <Link to="/" className='menu'><MenuItem>Home</MenuItem></Link>
                    <Link to="/category/headphones" className='menu'><MenuItem>Headphones</MenuItem></Link>
                    <Link to="/category/speakers" className='menu'><MenuItem>Speakers</MenuItem></Link>
                    <Link to="/category/earphones" className='menu'><MenuItem>Earphones</MenuItem></Link>
                </Menu>
                <CartContainer>
                    {badge > 0 && <Badge>{badge}</Badge>}
                    <CartButton onClick={() => handleClick()}>
                        <img src={CartIcon} alt="cart" />
                    </CartButton>
                    <CartModal style={{ display: `${open}` }}>
                        <Cart />
                    </CartModal>
                </CartContainer>
            </Wrapper>
        </Container>
    )
}

export default Navbar
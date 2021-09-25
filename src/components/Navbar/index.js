import React, {useState, useEffect} from 'react'
import logo from '../../images/Logo_Horizontal_Nav.png'
import {Nav, NavbarContainer, NavLogoContainer, MobileIcon, NavMenu, NavItem, NavLinks, NavLogo, NavButton, NavBtnLink,} from './NavbarElements';
import {FaBars} from 'react-icons/fa';
import LoginButton from '../LoginButton';

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])


    return (
        <>
            <Nav scrollNav ={scrollNav}>
                <NavbarContainer>
                    <NavLogoContainer to='/'>
                        <NavLogo src={logo}></NavLogo>
                    </NavLogoContainer>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact">Cost</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="team">Our Team</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="#services">Services</NavLinks>
                        </NavItem>
                        {/* <NavItem>
                            <NavLinks to="contact">Contact</NavLinks>
                        </NavItem> */}
                        <LoginButton />
                        {/* <NavButton>
                            <NavBtnLink to="/signup">Sign Up</NavBtnLink>
                        </NavButton> */}
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}


export default Navbar;

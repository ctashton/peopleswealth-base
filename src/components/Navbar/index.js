import React from 'react'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavButton, NavBtnLink} from './NavbarElements';
import {FaBars} from 'react-icons/fa'

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>People's Wealth</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services">Our Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="team">Our Team</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact">Contact</NavLinks>
                        </NavItem>
                        <NavButton>
                            <NavBtnLink to="/signin">Sign In</NavBtnLink>
                        </NavButton>
                        <NavButton>
                            <NavBtnLink to="/signup">Sign Up</NavBtnLink>
                        </NavButton>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar

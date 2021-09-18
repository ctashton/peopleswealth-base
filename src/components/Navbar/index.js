import React from 'react';
import logo from '../../images/Logo_Horizontal_Nav.png';
import {
  Nav,
  NavbarContainer,
  NavLogoContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavLogo,
} from './NavbarElements';
import { FaBars } from 'react-icons/fa';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogoContainer to="/">
            <NavLogo src={logo}></NavLogo>
          </NavLogoContainer>
          <MobileIcon onClick={toggle}>
            <FaBars />
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
            {/* <NavButton>
              <NavBtnLink to="/signin">Sign In</NavBtnLink>
            </NavButton>
            <NavButton>
              <NavBtnLink to="/signup">Sign Up</NavBtnLink>
            </NavButton> */}
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;

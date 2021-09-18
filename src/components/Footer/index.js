import React from 'react';
import {
  FooterLogo,
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
} from './FooterElements';
import logo from '../../images/Logo_Horizontal_Footer.png';

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLogo src={logo} />
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Company</FooterLinkTitle>
                <FooterLink to="/signin">About us</FooterLink>
                <FooterLink to="/signin">Our Services</FooterLink>
                <FooterLink to="/signin">Team</FooterLink>
                <FooterLink to="/signin">Sign up</FooterLink>
                <FooterLink to="/signin">Sign in</FooterLink>
                <FooterLink to="/signin">Terms of Service</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Help</FooterLinkTitle>
                <FooterLink to="/signin">About us</FooterLink>
                <FooterLink to="/signin">Our Services</FooterLink>
                <FooterLink to="/signin">Team</FooterLink>
                <FooterLink to="/signin">Sign up</FooterLink>
                <FooterLink to="/signin">Sign in</FooterLink>
                <FooterLink to="/signin">Terms of Service</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Terms</FooterLinkTitle>
                <FooterLink to="/signin">About us</FooterLink>
                <FooterLink to="/signin">Our Services</FooterLink>
                <FooterLink to="/signin">Team</FooterLink>
                <FooterLink to="/signin">Sign up</FooterLink>
                <FooterLink to="/signin">Sign in</FooterLink>
                <FooterLink to="/signin">Terms of Service</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;

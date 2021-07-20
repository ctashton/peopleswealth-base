import React from 'react'
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink} from './FooterElements'


const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterWrap>
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
    )
}

export default Footer

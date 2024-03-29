import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const FooterContainer = styled.footer`
    background-color: #333;
`
export const FooterLogo = styled.img`
max-width: 480;
height: auto;
padding: 40px;
`

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`
export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width:820px) {
        padding-top: 32px;
    }
`

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start:
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #f9f9f9;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%
    }
`

export const FooterLinkTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 16px
    font-color: #f9f9f9;
`

export const FooterLink = styled(Link)`
    color: #f9f9f9;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover {
        color: #fff
        transition: .3s ease-out
    }
`
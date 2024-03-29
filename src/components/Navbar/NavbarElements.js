import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    background: #f9f9f9;
    height 85px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }

`
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 85px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`
export const NavLogoContainer = styled(LinkR)`
    // color: #333;
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: 24px;
    // font-weight: bold;
    // text-decoration: none;
`

export const NavLogo = styled.img`
    // color: #333;
    // font-size: 1.5rem;
    // font-weight: bold;
    // text-decoration: none;
`

export const MobileIcon = styled.div`
    display: none;
    
    @media screen and (max-width:768px) {
        display: block;
        position: absolute;
        top: 25px;
        right:0px;
        //width: 286px;
   //     height: 100px;
       transform: translate(-100%, 0%);
        font-size: 2rem;
        cursor: pointer;
        z-index:999;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;
    @media screen and (max-width:768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
    margin: 0px 10px;
`

export const NavLinks = styled(LinkS)`
    color: #333;
    display: flex;
    align-items: center;
    text-decoratoin: none;
    padding: 0 1 rem;
    height: 100%;
    cursor: pointer;

    &:hover {
        border-bottom: 3px solid #67C8CA;
    }
`
export const NavButton = styled.nav`
display: flex;
align-items: center;
margin: 0px 10px;
@media screen and (max-width 768px) {
    display: none;
}
`

export const NavBtnLink = styled(LinkR)`
border-radius: 50px;
background: #333;
white-space: nowrap;
padding: 10px 22px;
color: #FFF;
font-size: 16px;
outline: none;
border: none;
cursor: poniter;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #333;
}

`
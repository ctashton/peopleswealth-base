import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about"> About </SidebarLink>
                    <SidebarLink to="services">Our Services</SidebarLink>
                    <SidebarLink to="team">Our Team</SidebarLink>
                    <SidebarLink to="contact">Contact</SidebarLink>
                    <SidebarLink to="signin">Sign in</SidebarLink>
                </SidebarMenu>
                {/* <SideBtnWrap>
                    <SidebarRoute to='/signin'>
                        Sign Up
                    </SidebarRoute>
                    <SidebarRoute to='/signup'>
                        Sign In
                    </SidebarRoute>
                </SideBtnWrap> */}
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar

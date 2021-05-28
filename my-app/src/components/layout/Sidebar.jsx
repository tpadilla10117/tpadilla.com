import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements.js';

const SidebarComponent = (props) => {

    const {isOpen, navToggle} = props;


    return (
        <SidebarContainer isOpen={isOpen} onClick={navToggle}>
            <Icon onClick={navToggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    {/* Remember to add the rest of the links */}
                    <SidebarLink onClick={navToggle}>
                        About
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    {/* <SidebarRoute>
                        Sign In
                    </SidebarRoute> */}
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default SidebarComponent;
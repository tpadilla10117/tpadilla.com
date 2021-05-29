import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarLi, SidebarRoute } from './SidebarElements.js';
import { SidebarData } from '../../../utils';
import { Link } from 'react-router-dom';
const SidebarComponent = (props) => {

    const {isOpen, navToggle} = props;


    return (
        <SidebarContainer isOpen={isOpen} onClick={navToggle}>
            <Icon onClick={navToggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink onClick={navToggle}>
                    {SidebarData.map( (item, index) => {
                                    return (
                                        
                                        <Link to={item.path} className="nav-item" style={{textDecoration: "none"}}>
                                            <SidebarLi key={index} className={item.cName}>
                                                    {/* {item.icon} */}
                                                    <span>{item.title}</span>
                                            </SidebarLi>
                                        </Link>
                                        
                                    )
                                } )}
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
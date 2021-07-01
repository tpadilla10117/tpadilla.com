import React, { useState } from 'react';

import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarLi, SidebarRoute } from './SidebarElements.js';
import './SideBarTransition.css';
import { SidebarData } from '../../../utils';
import { Link } from 'react-router-dom';
import { CSSTransition } from "react-transition-group";

const SidebarComponent = (props) => {

    const {isOpen, navToggle} = props;

    return (
        <CSSTransition in={isOpen} timeout={300} classNames={"sideBarTransition"} unmountOnExit onEnter={() => navToggle} onExited={() => navToggle}>
        <SidebarContainer isOpen={isOpen} /* onClick={navToggle} */>

            {/* This is the X icon */}
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
        </CSSTransition>
    );
};

export default SidebarComponent;
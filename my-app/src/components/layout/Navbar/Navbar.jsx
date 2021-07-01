import React, {useState, useEffect} from 'react';

import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

import { AiOutlineConsoleSql } from 'react-icons/ai';
import { NavbarData } from '../../../utils';
import { IconContext } from 'react-icons';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavLi, NavBtn, NavBtnLink} from './NavbarElements.js';

/* NavbarComponent is for the landing page header */
    
    const NavbarComponent = (props) => {

        const { navToggle } = props;

        const [scrollNav, setScrollNav] = useState(false);

        const changeNav = () => {
            if(window.scrollY >= 80) {
                setScrollNav(true)
            } else {
                setScrollNav(false);
            }
        };

        useEffect(() => {
            window.addEventListener('scroll', changeNav)
        }, [])

        return  (
            <div id="navbar-wrapper">

            {/* <IconContext.Provider value={{color: '#f0e9dc'}}> */}
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to="/">Trin P</NavLogo>
                        <MobileIcon onClick={navToggle}>
                            <FaIcons.FaBars/>
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks>
                                {NavbarData.map( (item, index) => {
                                    return (
                                        
                                        <Link to={item.path} className="nav-item" style={{textDecoration: "none"}}>
                                            <NavLi key={index} className={item.cName}>
                                                
                                                <span>{item.title} {item.icon}</span>
                                            </NavLi>
                                        </Link>
                                        
                                    )
                                } )}

                                </NavLinks>
                            </NavItem>
                        </NavMenu>
                        {/* <NavBtn>
                            <NavBtnLink to='signup'>Sign Up</NavBtnLink>
                        </NavBtn> */}
                        
                    </NavbarContainer>
                </Nav>
           {/*  </IconContext.Provider> */}
              
            </div>
        )
    }

    export default NavbarComponent;
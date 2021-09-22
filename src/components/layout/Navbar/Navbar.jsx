import React, {useState, useEffect} from 'react';

import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import { NavbarData } from '../../../utils';
/* import { IconContext } from 'react-icons'; */
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavLi/* , NavBtn, NavBtnLink, NavItem, NavLinks */} from './NavbarElements.js';

/* NavbarComponent is for the landing page header */
    /* TODO: Need to ensure correct nav lunks get highlighted in botht he hamburger and normal nav view when clicked */
    const NavbarComponent = (props) => {

        const { navToggle } = props;

        const [scrollNav, setScrollNav] = useState(false);
        const [ navLinkState, changeNavLinkState ] = useState(NavbarData);

      
      /* Helper Function to toggle Active Nav link */
        function toggleActiveNav(index) {
            changeNavLinkState( {...navLinkState, activeObject: navLinkState[index].id} )
        }

        /* Helper Function to toggle the classNames that are styled */

        function toggleActiveStyles(index) {
            return navLinkState[index].id === navLinkState.activeObject ? "active" : "inactive";
        }

        const changeNav = () => {
            if(window.scrollY >= 80) {
                setScrollNav(true)
            } else {
                setScrollNav(false);
            }
        };

        useEffect(() => {
            window.addEventListener('scroll', changeNav)
        }, []);

        return  (
            <div id="navbar-wrapper">

            {/* <IconContext.Provider value={{color: '#f0e9dc'}}> */}
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        {/* <NavLogo to="/">Trin P</NavLogo> */}
                        <MobileIcon onClick={navToggle}>
                            <FaIcons.FaBars/>
                        </MobileIcon>
                        <NavMenu className="nav-menu">
                            
                                {/* <NavLinks className="look"> */}
                                    {/* <NavItem> */}
                                {NavbarData.map( (item, index) => {
                                    return (
                                        
                                        <Link to={item.path} className={toggleActiveStyles(index)} onClick={() => { toggleActiveNav(index)}} style={{textDecoration: "none"} } key={"nav-li-" + index}>
                                            <NavLi key={index} className={toggleActiveStyles(index)} onClick={() => { toggleActiveNav(index)}}>
                                                <span style={ {display: 'flex', alignItems: "center",}}>{item.title} 
                                                    <span style={ {paddingTop: '.2rem', paddingLeft: '.5rem' }}>{item.icon}</span> 
                                                </span>
                                                {/* <span className="item-icon" style={ { color: 'red'}}>{item.icon}</span> */}
                                            </NavLi>
                                        </Link>
                                        
                                    )
                                } )}
                                {/* </NavItem> */}
                                {/* </NavLinks> */}
                            
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
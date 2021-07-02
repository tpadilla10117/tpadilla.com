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
        const [isActive, setIsActive ] = useState(false);
        const [ navLinkState, changeNavLinkState ] = useState(NavbarData);

      
      /* Helper Function to toggle Active Nav link */
        function toggleActiveNav() {
            changeNavLinkState( {...navLinkState, activeObject: navLinkState.id} )
        }

        /* Helper Function to toggle the classNames that are styled */

        function toggleActiveStyles() {
            return navLinkState.id === navLinkState.activeObject ? " active" : "inactive";
        }


        const navData = () => {

            console.log("HEre is the data Im grabbing:", NavbarData[2].path);
            console.log("Here is the result of navLinkState:", navLinkState)
            
        }

        navData();


    /* Toggler to Change nav classes to active: */
        const activeNavClassToggler = () => {
            setIsActive(true);
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
                        <NavLogo to="/">Trin P</NavLogo>
                        <MobileIcon onClick={navToggle}>
                            <FaIcons.FaBars/>
                        </MobileIcon>
                        <NavMenu>
                            
                                <NavLinks>
                                {NavbarData.map( (item, index) => {
                                    return (
                                        
                                        <Link to={item.path} className="nav-item" style={{textDecoration: "none"}} key={index}>
                                            <NavLi key={index} className={toggleActiveStyles()} onClick={() => { toggleActiveNav()}}/* {item.cName && isActive ? `${item.cName} active` : `${item.cName}`} onClick={() => activeNavClassToggler()} */>
                                                <span>{item.title} {item.icon}</span>
                                            </NavLi>
                                        </Link>
                                        
                                    )
                                } )}
                                </NavLinks>
                            
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
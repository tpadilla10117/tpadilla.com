import React, {useState} from 'react';

import '../../assets/css/Navbar.css';

import { Link, useLocation } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { AiOutlineConsoleSql } from 'react-icons/ai';
import { SidebarData } from '../../utils';
import { IconContext } from 'react-icons';

/* NavbarComponent is for the landing page header */
    
    const NavbarComponent = (props) => {

        const { navState, changeNavState } = props;

        const [sidebar, setSidebar] = useState(false);
        const showSidebar = () => setSidebar(!sidebar);

    /* Helper Function to toggle Active Navbar */
   /*  function toggleActive(index) {
        changeNavState({...navState, activeObject: navState.objects[index]})
    }
 */
/* Helper Function to toggle the classNames that are styled */
    /* function toggleActiveStyles(index) {
        return navState.objects[index] === navState.activeObject ? "nav-ul nav-active" : "nav-ul";
    } */


       /*  const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-ul');
  const navLinks = document.querySelectorAll('.nav-links li');

  //Toggle Nav
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

  //Animate Links
  navLinks.forEach( (link, index) => {
    if( link.style.animation) {
      link.style.animation ='';
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`
    }
  })

  //Burger Animation
  burger.classList.toggle('toggle');


  })
}

navSlide(); */






        return  (
            <div id="navbar-wrapper">
                <IconContext.Provider value={{color: '#f0e9dc'}}>
                    <div className="navbar">
                            <Link to='#' className="menu-bars">
                                <FaIcons.FaBars onClick={showSidebar} />
                            </Link>
                    </div>
                    <nav className={sidebar ? 'nav active' : 'nav'}>
                        {/* <div className="logo">Trin P
                        </div> */}
                       
                            <ul className="nav-ul" onClick={showSidebar}> {/* same as nav-menu-items */}
                                <li className='navbar-toggle'>
                                    <Link to ="#" className='menu-bars'>
                                        <AiIcons.AiOutlineClose />
                                    </Link>
                                </li>
                                {SidebarData.map( (item, index) => {
                                    return (
                                        
                                        <Link to={item.path} className="nav-item">
                                        <li key={index} className={item.cName}>
                                                {item.icon}
                                                <span>{item.title}</span>
                                            </li>
                                        </Link>
                                        
                                    )
                                } )}
                                {/* <Link to="/about" className="nav-item"> 
                                    <li>About</li>
                                </Link> 
                                
                                <Link className="nav-item" to="/portfolio">
                                    <li>Portfolio</li>
                                </Link>
                                
                                <Link className="nav-item" to="/landing">
                                    <li>
                                        TP
                                    </li>
                                </Link>
    
                                <Link className="nav-item" to="/contact">
                                    <li>
                                        Contact
                                    </li>
                                </Link>

                                
                                <Link className="nav-item" to="/resume">
                                    <li>
                                        Resume
                                    </li>
                                </Link> */}
                               
                        </ul>
                        {/* </div> */}
                    </nav>
                </IconContext.Provider>
                    
            
            </div>
        )
    }

    export default NavbarComponent;
import React, { useEffect, useState } from 'react';
/* import axios from 'axios'; */

/* import '../../assets/css/Navbar.css'; */

import { Link, NavLink } from 'react-router-dom';

/* NavbarComponent is for the landing page header */
    
    const NavbarComponent = () => {
        return  (
            <div id="navbar-wrapper">
                
                    <nav className="nav">
                        <ul className="nav-ul">
                            <li><NavLink to="/about"><a href="#about">ABOUT ME</a></NavLink></li>
                            <li><NavLink to="/portfolio"><a href="#portfolio">PORTFOLIO</a></NavLink></li>
                            <li><NavLink to="/contact"><a href="#contact">CONTACT</a></NavLink></li>
                            <li><a href="#resume">RESUME</a></li>
                            {/* <!-- <li><a href="#elements">Elements</a></li> --> */}
                        </ul>
                    </nav>
            
            </div>
        )
    }

    export default NavbarComponent;
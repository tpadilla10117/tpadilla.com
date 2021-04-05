import React, { useEffect, useState } from 'react';

import '../../assets/css/Navbar.css';

import { Link, NavLink } from 'react-router-dom';

/* NavbarComponent is for the landing page header */
    
    const NavbarComponent = () => {
        return  (
            <div id="navbar-wrapper">
                
                    <nav className="nav">
                        <div className="brand">Trin P</div>
                        <div className="toggle-button">
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </div>
                        <div className="navbar-links">
                            <ul className="nav-ul">
                                <li>
                                <Link className="nav-item" to="/about">
                                    ABOUT
                                </Link>
                                
                                </li>
                                <li>
                                <Link className="nav-item" to="/portfolio">
                                    PORTFOLIO
                                </Link>
                                
                                </li>
                                <li>
                                <Link className="nav-item" to="/contact">
                                    CONTACT
                                </Link>
                                </li>

                                <li>
                                <Link className="nav-item" to="/skills">SKILLS</Link>
                                </li>
                                
                                <li>
                                <Link className="nav-item" to="/resume">
                                    RESUME
                                </Link>
                                
                                </li>

                                {/* <li className="nav-item"><NavLink to="/portfolio"><a href="#portfolio">PORTFOLIO</a></NavLink></li> */}

                                {/* <li className="nav-item"><NavLink to="/contact"><a href="#contact">CONTACT</a></NavLink></li> */}
                               
                        </ul>
                        </div>

                    </nav>
            
            </div>
        )
    }

    export default NavbarComponent;
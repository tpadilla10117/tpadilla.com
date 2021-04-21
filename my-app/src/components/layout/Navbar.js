import React, { useEffect, useState } from 'react';

import '../../assets/css/Navbar.css';

import { Link, NavLink } from 'react-router-dom';

/* NavbarComponent is for the landing page header */
    
    const NavbarComponent = () => {
        return  (
            <div id="navbar-wrapper">
                
                    <nav className="nav">
                        {/* <div className="brand">Trin P</div> */}
                        <div className="toggle-button">
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </div>
                        {/* <div className="navbar-links"> */}
                            <ul className="nav-ul">
                                <Link to="/about" className="nav-item"> 
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
                                </Link>
                               
                        </ul>
                        {/* </div> */}

                    </nav>
            
            </div>
        )
    }

    export default NavbarComponent;
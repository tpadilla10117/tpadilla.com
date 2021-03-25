import React from 'react';
import { Link } from 'react-router-dom';
/* import {NavbarComponent} from './index'; */

/* Header is for the landing page header */

    const Header = () => {
        return (
            <div id="headerwrapper">
                <header id="header">
                    <div class="logo">
                    {/* <!-- <span>TP</span> --> */}
                        {/* <span class="icon fa-circle"></span> */}
                    </div>
                    {/* <div class="mainPageContent">
                        <div class="inner">
                            <h1>Trinidad F Padilla Jr</h1>
                            <p>FullStack Software Engineer & Web Developer</p>
                        </div>
                    </div> */}
                    {/* <NavbarComponent /> */}
                </header>
            </div>
        )
    }

export default Header;
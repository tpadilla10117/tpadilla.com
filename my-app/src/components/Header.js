import React from 'react';
import {NavbarComponent} from './index';

/* Header is for the landing page header */

    const Header = (props) => {
        const { navState, changeNavState } = props;
        return (
            <div id="headerwrapper">
                <header id="header">
                    <div class="logo">
                    {/* <!-- <span>TP</span> --> */}
                        {/* <span class="icon fa-circle"></span> */}
                    </div>
        
                    <NavbarComponent navState={navState} changeNavState={changeNavState}/>
                </header>
            </div>
        )
    }

export default Header;
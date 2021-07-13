import React, {useState} from 'react';
import {NavbarComponent, SideBarComponent} from './index';

/* Header is for the landing page header */

    const Header = (props) => {
        
        const [isOpen, setIsOpen] = useState(false);

        const navToggle = () => {
            setIsOpen(!isOpen);
        };


        return (
            <div id="headerwrapper">
                <header id="header">
                    <div className="logo">
                    {/* <!-- <span>TP</span> --> */}
                        {/* <span class="icon fa-circle"></span> */}
                    </div>
                    <NavbarComponent  isOpen={isOpen} navToggle={navToggle} />
                    <SideBarComponent isOpen={isOpen} navToggle={navToggle}/>
                </header>
            </div>
        )
    }

export default Header;
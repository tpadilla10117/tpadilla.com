import React, { useEffect, useState } from 'react';
/* import axios from 'axios';
import '../../assets/css/AboutMe.css'; */
import { IoLogoJavascript, IoLogoNodejs, IoLogoCss3 } from "react-icons/io";
import { SiPostgresql, SiReact  } from "react-icons/si";
import { FaStripe } from "react-icons/fa";
/* import trin.jpg from '../../assets/images/trin.jpg'; */

const AboutMeComponent = (props) => {

    return <> 
        <div id="mainPage-wrapper">
            <div id="bio-wrapper">
                
                <div className="sideBio">
                    {/* <img class="guitar" src={trin.jpg} alt="Guitar Player" width="200" height="150"/> */}
                    <h4>A Day In The Life Of Trin...</h4>
                    <p>I grew up in a small Californian suburban town called Cordelia.  Growing up I've always yearned for more - I wondered about what the rest of the world was like and what people might be like.  That curiosity remains to this day - I seek to broaden my worldview and to experience as many firsts as I possibly can within this lifetime.  Over the years I have visited mostly neighboring states including: Oregon, Nevada, & Arizona.  My sights are now set on the rest of the United States and countries such as Japan, Canada, Italy, Greece, England, Germany, Switzerland, etc.</p>
                    <br/><hr/><br/>
                    <ul className="stackIcons">
                        <li className="icons">{<IoLogoJavascript />}</li>
                        <li className="icons">{<SiPostgresql/>}</li>
                        <li className="icons">{<IoLogoNodejs/>}</li>
                        <li className="icons"> {<FaStripe/>}</li>
                        <li className="icons">{<IoLogoCss3/>}</li>
                        <li className="icons"> {<SiReact/>}</li>
                    </ul>
                </div>
            </div>
           
        </div>
    
    </>
}

export default AboutMeComponent;
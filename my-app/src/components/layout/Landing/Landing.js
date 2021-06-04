import React, { useEffect, useState, Component } from 'react';

import './Landing.css';
import CrwnClothing from "../../../../src/assets/images/crwn_clothing_landing.png";
import Codalorians from "../../../../src/assets/images/codalorians.png";
import PixelDraw from "../../../../src/assets/images/pixel_draw.png";
import Postbook from "../../../../src/assets/images/postbook.png";
import RoboSearch from "../../../../src/assets/images/robo_search.png";
import TechStackFooter from '../Footer/Footer.jsx';
/* import ProjectCards from '../feature/ProjectCards';
import { picBox } from '../../utils'; */


const Landing = (props) => {


        return (
        <>

        <div className="projCard-container">

        <a href="https://github.com/tpadilla10117/crwn-clothing">
            <div className="projCard-box">
                <div className="img-wrapper">
                    <img src={CrwnClothing} alt="A clickable card of an application called `Crwn Clothing`"/>
                </div>

                <div className="details-box">
                <div className="content-box">
                    {/* <h2>This is the Card Title</h2> */}
                    <p>An e-commerce for Stylish, Trendy Clothing</p>
                </div>
                </div>
            </div>
        </a>

            <a href="https://github.com/2006-cpu/codalorians">
            <div className="projCard-box">
                
                <div className="img-wrapper">
                    <img src={Codalorians} alt="A clickable card of an application called `Codalorians`"/>
                    
                </div>

                <div className="details-box">
                <div className="content-box">
                    {/* <h2>This is the Card Title</h2> */}
                    <p>An e-commerce for Musical Instruments</p>
                </div>
                </div>
            </div>
            </a>

            <a href="https://objective-volhard-a4bd7a.netlify.app/">
            <div className="projCard-box">
                <div className="img-wrapper">
                    <img src={PixelDraw} alt="A clickable card of an application called `Pixel Draw`"/>
                </div>

                <div className="details-box">
                <div className="content-box">
                    
                    <p>A Simple, Grid-Based, Pixel-Art Creator</p>
                </div>
                </div>
            </div>
            </a>

            <a href="https://laughing-austin-fe12b7.netlify.app/#">
                <div className="projCard-box">
                    <div className="img-wrapper">
                        <img src={Postbook} alt="A clickable card of an application called `PostBook`"/>
                    </div>

                    <div className="details-box">
                    <div className="content-box">
                        {/* <h2>This is the Card Title</h2> */} 
                        <p>An App Where Users Can Post Items For Sale</p>
                    </div>
                    </div>
                </div>
            </a>

            <a href="https://tpadilla10117.github.io/robo_search/">
                <div className="projCard-box">
                    <div className="img-wrapper">
                        <img src={RoboSearch} alt="A clickable card of an application called `Robo Search`"/>
                    </div>
                    
                    <div className="details-box">
                    <div className="content-box">
                        {/* <h2>This is the Card Title</h2> */}
                        <p>A Way To Search For Product Cards</p>
                    </div>
                    </div>
                </div>
            </a>
            {/* <div className="projCard-box">
                <div className="img-wrapper">
                    <img src={Image3}/>
                </div>

                <div className="details-box">
                <div className="content-box">
                    
                    <p>This is the actual content on the card</p>
                </div>
                </div>
            </div> */}
        </div>
        
        <TechStackFooter />
      
        </>
        )
}

export default Landing;
import React, { useEffect, useState, Component } from 'react';

import '../../assets/css/Landing.css';
import Image3 from "../../../src/assets/images/crwn_clothing_landing.png";
import Image4 from "../../../src/assets/images/codalorians.png";
import Image5 from "../../../src/assets/images/pixel_draw.png";
import Image6 from "../../../src/assets/images/postbook.png";
import Image7 from "../../../src/assets/images/robo_search.png";
/* import ProjectCards from '../feature/ProjectCards';
import { picBox } from '../../utils'; */


const Landing = (props) => {

    /* const {activeColor, cellList, setCellList} = props; */

        return (
        <>

        <div className="projCard-container">
            <div className="projCard-box">
                <div className="img-wrapper">
                    <img src={Image3}/>
                </div>

                <div className="details-box">
                <div className="content-box">
                    {/* <h2>This is the Card Title</h2> */}
                    <p>This is the actual content on the card</p>
                </div>
                </div>

            </div>
            <div className="projCard-box">
                <div className="img-wrapper">
                    <img src={Image4}/>
                </div>

                <div className="details-box">
                <div className="content-box">
                    {/* <h2>This is the Card Title</h2> */}
                    <p>This is the actual content on the card</p>
                </div>
                </div>
            </div>
            <div className="projCard-box">
                <div className="img-wrapper">
                    <img src={Image5}/>
                </div>

                <div className="details-box">
                <div className="content-box">
                    {/* <h2>This is the Card Title</h2> */}
                    <p>This is the actual content on the card</p>
                </div>
                </div>
            </div>
            <div className="projCard-box">
                <div className="img-wrapper">
                    <img src={Image6}/>
                </div>

                <div className="details-box">
                <div className="content-box">
                    {/* <h2>This is the Card Title</h2> */}
                    <p>This is the actual content on the card</p>
                </div>
                </div>
            </div>
            <div className="projCard-box">
                <div className="img-wrapper">
                    <img src={Image7}/>
                </div>

                <div className="details-box">
                <div className="content-box">
                    {/* <h2>This is the Card Title</h2> */}
                    <p>This is the actual content on the card</p>
                </div>
                </div>
            </div>
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
      
        </>
        )
}

export default Landing;
import React, { useEffect, useState, Component } from 'react';

import '../../assets/css/Landing.css';
import Image3 from "../../../src/assets/images/hike.jpeg";
/* import ProjectCards from '../feature/ProjectCards';
import { picBox } from '../../utils'; */


const Landing = (props) => {

    /* const {activeColor, cellList, setCellList} = props; */

        return (
        <>
        

       {/* /*  picBox.map( (image, index) => 
        <ProjectCards key={'image' + index}/>) */ }

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
                    <img src={Image3}/>
                </div>

                <div className="details-box">
                <div className="content-box">
                    {/* <h2>This is the Card Title</h2> */}
                    <p>This is the actual content on the card</p>
                </div>
                </div>
            </div>
        </div>
      
        </>
        )
}

export default Landing;
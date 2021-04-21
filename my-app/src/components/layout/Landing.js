import React, { useEffect, useState, Component } from 'react';

import '../../assets/css/Landing.css';
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
                <div className="img-container">
                {/* <img src="img1.jpg"/> */}
                </div>

                <div className="details-box">
                <div className="content-box">
                    <h2>This is the Card Title</h2>
                    <p>This is the actual content on the card</p>
                </div>
                </div>

            </div>
            <div className="projCard-box"></div>
            <div className="projCard-box"></div>
            <div className="projCard-box"></div>
        </div>
      
        

        
        </>
        )
}

export default Landing;
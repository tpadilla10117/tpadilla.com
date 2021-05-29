import React, { useEffect, useState, Component } from 'react';

import '../../assets/css/Portfolio.css';

/* EXAMPLE of IMPORTING IMAGES */

/* import { Link, NavLink } from 'react-router-dom'; */

export default class Portfolio extends Component {
    render() {
        return (
            <>
            
            <div className="project-title">
                <p>My Portfolio</p>
            </div>
            
            {/* Where I plan on rendering the interactive project section */}
            <section className="projects___section">

                <div className="projects__container">
                    <div className="content___container">

                    </div>
                    <div className="activeImg">

                    </div>
                    <div className="project__images">

                    </div>

                </div>
                
            </section>


            </>
        )
    }
}